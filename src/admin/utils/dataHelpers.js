// helper: get meta_value by key
export function getMetaValue(metaArray, key) {
  const item = metaArray.find(m => m.meta_key === key)
  return item ? item.meta_value : "—"
}

export function getCategoryNames(categoryArray) {
  if (!Array.isArray(categoryArray) || categoryArray.length === 0) return "—"
  return categoryArray
    .map(c => c.categories?.name)
    .filter(Boolean)
    .join(", ")
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}


export function getUserRole(user) {
  // if (!user) return "basic";
  if (user.is_owner) return "owner";
  if (user.is_admin) return "admin";
  return "basic";
}
