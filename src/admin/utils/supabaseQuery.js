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
