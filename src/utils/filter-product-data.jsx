function filterProducts(products, type, category) {
    // Filter artworks based on the type
    const filteredArtworks = products.filter((artwork) => {
        if (type === 'featured') {
            return artwork.featured;
        }

        if (type === 'new') {
            const daysAgo = 30;
            const now = new Date();
            const cutoffDate = new Date(now.setDate(now.getDate() - daysAgo));

            // First check for products within 30 days
            const newProducts = products.filter(product => {
                if (!product.dateAdded) return false;
                const addedDate = new Date(product.dateAdded);
                return addedDate >= cutoffDate;
            });

            if (newProducts.length > 0) {
                // Only keep products that are in the "newProducts" list
                return newProducts.some(product => product.id === artwork.id);
            } else {
                // Fallback: include only the newest items overall
                const newestDate = Math.max(...products.map(p => new Date(p.dateAdded || 0)));
                return new Date(artwork.dateAdded) >= newestDate;
            }

        }

        if (type === 'sale') {
            if (!artwork.salePrice) return false; // skip if null or empty
            const price = parseFloat(artwork.price);
            const salePrice = parseFloat(artwork.salePrice);
            return !isNaN(price) && !isNaN(salePrice) && salePrice < price;
        }

        if (type === 'bestseller') {
            // Only include items with salesCount > 0
            return artwork.salesCount && artwork.salesCount > 0;
        }

        if (type === 'category') return artwork.category.includes(category);
        return true; // Default case, return all artworks
    });


    if (type === 'sale') {
        filteredArtworks.sort((a, b) => {
            const discountA = (parseFloat(a.price) - parseFloat(a.salePrice)) / parseFloat(a.price);
            const discountB = (parseFloat(b.price) - parseFloat(b.salePrice)) / parseFloat(b.price);
            return discountB - discountA; // bigger discount first
        });
    }

    if (type === 'bestseller') {
        filteredArtworks.sort((a, b) => b.salesCount - a.salesCount);
    }

    return filteredArtworks;
}


export default filterProducts;