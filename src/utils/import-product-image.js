export function importProductImage(type, folder, filename) {
  if( type === 'product' ) {
    return require(`../assets/products/${folder}/${filename}`);
  } else if ( type === 'category' ) {
    return require(`../assets/category/${filename}`);
  }else {
    return null;
  }
  
}