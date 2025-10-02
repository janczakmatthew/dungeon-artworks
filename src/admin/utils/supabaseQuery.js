import { supabase } from '../../supabaseClient';

/**
 * Generic function to fetch data from a table
 * @param {string} table - Table name
 * @param {Array} columns - Columns to select (default '*')
 * @param {object} filters - Filters { columnName: value }
 * @param {string} orderBy - Column to order by
 */
export async function fetchFromTable({ table, columns, filters = {}, orderBy }) {
  try {
    let query = supabase.from(table).select(columns);

    // Apply filters
    for (const [column, value] of Object.entries(filters)) {
      query = query.eq(column, value);
    }

    // Apply ordering
    if (orderBy) {
      query = query.order(orderBy, { ascending: false });
    }

    const { data, error } = await query;

    if (error) {
      console.error('Supabase fetch error:', error.message);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Unexpected error fetching from Supabase:', err);
    return null;
  }
}

/**
 * Generic insert (create new rows)
 */
export async function insertIntoTable(table, rows) {
  try {
    const { data, error } = await supabase.from(table).insert(rows).select();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error(`Supabase insert error into ${table}:`, err.message);
    return null;
  }
}


/**
 * Generic upsert (insert or update on conflict)
 */
export async function upsertIntoTable(table, rows, conflictColumn = 'id') {
  try {
    const { data, error } = await supabase
      .from(table)
      .upsert(rows, { onConflict: conflictColumn })
      .select();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error(`Supabase upsert error into ${table}:`, err.message);
    return null;
  }
}

/**
 * Generic update (update matching filters)
 */
export async function updateTable(table, values, filters = {}) {
  try {
    let query = supabase.from(table).update(values);

    for (const [column, value] of Object.entries(filters)) {
      query = query.eq(column, value);
    }

    const { data, error } = await query.select();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error(`Supabase update error in ${table}:`, err.message);
    return null;
  }
}

/**
 * Generic delete (delete matching filters)
 */
export async function deleteFromTable(table, filters = {}) {
  try {
    let query = supabase.from(table).delete();

    for (const [column, value] of Object.entries(filters)) {
      query = query.eq(column, value);
    }

    const { data, error } = await query.select();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error(`Supabase delete error from ${table}:`, err.message);
    return null;
  }
}

export function withMinimumDelay(promise, delay = 500) {
  // console.log("withMinimumDelay", promise, delay);
  return Promise.all([promise, new Promise(res => setTimeout(res, delay))])
    .then(([result]) => result);
}

/**
 * Fecth Media
 */

export async function fetchMedia(bucket = 'other', folder = '') {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list(folder, { limit: 100 });

    if (error) {
      console.error('Error listing media:', error);
      return [];
    }

    if (!data || data.length === 0) {
      console.log('No files found in folder:', folder);
      return [];
    }

    // Get signed URLs for each file
    const filesWithUrls = await Promise.all(
      data.map(async (file) => {
        const { data: signedUrlData, error: urlError } = await supabase.storage
          .from('other')
          .createSignedUrl(`${folder}/${file.name}`, 60); // URL valid for 60 seconds

        if (urlError) {
          console.error('Error creating signed URL for', file.name, urlError);
          return null;
        }

        return {
          name: file.name,
          url: signedUrlData.signedUrl,
        };
      })
    );

    return filesWithUrls.filter(f => f !== null); // remove any errors
  } catch (err) {
    console.error('Unexpected error fetching media:', err);
    return [];
  }
}


/**
 * Upload files to Supabase Storage
 * @param {File} file - The file to upload
 * @param {string} bucket - The Supabase storage bucket
 * @param {string} folder - The folder inside the bucket
 * @param {string} fixedName - Optional fixed filename (favicon.ico, logo.png)
 */
export async function uploadMedia(file, bucket = 'other', folder = '', fixedName = null) {
  // Use fixed name if provided, otherwise timestamp
  const extension = file.name.split('.').pop();
  const originalName = file.name.replace(/\.[^/.]+$/, ""); // remove extension
  const fileName = fixedName ? fixedName : `${originalName}_${Date.now()}.${extension}`;
  const uploadPath = folder ? `${folder}/${fileName}` : fileName;

  console.log(`Uploading file to bucket: ${bucket}, path: ${uploadPath}`);

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(uploadPath, file, {
      upsert: true, // allow overwrite
    });

  if (error) {
    console.error("Error uploading file:", error);
    throw error;
  }

  // Correct way to get public URL
  const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(uploadPath);
  const publicUrl = publicUrlData.publicUrl;

  //console.log(`Retrieved public URL: ${publicUrl}`);

  return publicUrl;
}


/**
 * Delete Files
 */
export async function deleteMedia(filePath) {
  const { error } = await supabase.storage.from('media').remove([filePath]);
  if (error) throw error;
  return true;
}