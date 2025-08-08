function filterProducts(products,type, category) {
   // Filter artworks based on the type
    const filteredArtworks = products.filter((artwork) => {
        if (type === 'featured') {
            return artwork.featured;
        }

        if (type === 'new') {
            const daysAgo = 30;
            const now = new Date();
            const cutoffDate = new Date(now.setDate(now.getDate() - daysAgo));

            const newProducts = products.filter(product => {
                if (!product.dateAdded) return false;
                const addedDate = new Date(product.dateAdded);
                return addedDate >= cutoffDate;
            });

            return newProducts.some(product => product.id === artwork.id);

        }
        if (type === 'category') return artwork.category.includes(category);
        return true; // Default case, return all artworks
    });
    return filteredArtworks;
}


export default filterProducts;