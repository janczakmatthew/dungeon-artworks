export function importProductImage(type, folder, filename) {
  console.log("Importing image:", {type, folder, filename});
  if( type !== 'product' ) {
    return null;
  }
  return require(`../assets/products/${folder}/${filename}`);
}