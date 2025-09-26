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