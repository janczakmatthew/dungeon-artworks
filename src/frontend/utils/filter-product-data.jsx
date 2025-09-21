function filterProducts(products, type, category, productType) {
    // Step 1: Base filtering (featured, new, sale, bestseller, category)
    let filteredArtworks = products.filter((artwork) => {
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

            if (newProducts.length > 0) {
                return newProducts.some(product => product.id === artwork.id);
            } else {
                const newestDate = Math.max(...products.map(p => new Date(p.dateAdded || 0)));
                return new Date(artwork.dateAdded) >= newestDate;
            }
        }

        if (type === 'sale') {
            if (!artwork.salePrice) return false;
            const price = parseFloat(artwork.price);
            const salePrice = parseFloat(artwork.salePrice);
            return !isNaN(price) && !isNaN(salePrice) && salePrice < price;
        }

        if (type === 'bestseller') {
            return artwork.salesCount && artwork.salesCount > 0;
        }

        if (type === 'category') {
            return artwork.category.includes(category);
        }

        if (type === 'digital' || type === 'physical' || type === 'product') {
            return artwork.type === type;
        }
        return true; // default: include all
    });

    // Step 2: Sorting
    if (type === 'sale') {
        filteredArtworks.sort((a, b) => {
            const discountA = (parseFloat(a.price) - parseFloat(a.salePrice)) / parseFloat(a.price);
            const discountB = (parseFloat(b.price) - parseFloat(b.salePrice)) / parseFloat(b.price);
            return discountB - discountA;
        });
    }

    if (type === 'bestseller') {
        filteredArtworks.sort((a, b) => b.salesCount - a.salesCount);
    }

    return filteredArtworks;
}

export default filterProducts;
