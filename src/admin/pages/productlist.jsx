import { useEffect, useState } from "react";
import { fetchFromTable, withMinimumDelay,  } from '../utils/supabaseQuery';
import { getMetaValue, getCategoryNames, formatCurrency } from "../utils/dataHelpers";

import TitleSection from "../components/titlesection";
import Table from "../components/table";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      // Show loading spinner
      setLoading(true);

      // Fetch products with related meta, tags, and categories, with a minimum delay for better UX
      const data = await withMinimumDelay(fetchFromTable({ table: 'products', columns: '*, product_meta(*), product_tags(*), product_categories(*, categories (*))' }), 10);

      // Update state
      setProducts(data || []);

      // Hide loading spinner
      setLoading(false);
    }
    getProducts();
  }, []);

  const handleEdit = (product) => {
    console.log("Edit", product);
  };

  const handleDelete = (product) => {
    console.log("Delete", product);
  };

  const columns = [
    {
      header: "Title",
      key: "title",
    },
    {
      header: "Type",
      accessor: (row) => getMetaValue(row.product_meta, "type"),
    },
    {
      header: "Price",
      render: (_, row) =>
        row.sale_price ? (
          <>
            <span className="line-through mr-1">{formatCurrency(row.price)}</span>
            <span className="text-red-400">{formatCurrency(row.sale_price)}</span>
          </>
        ) : (
          `${formatCurrency(row.price)}`
        ),
    },
    {
      header: "Categories",
      accessor: (row) => getCategoryNames(row.product_categories),
    },
    {
      header: "Actions",
      render: (_, row) => (
        <div className="space-x-2">
          <button
            onClick={() => handleEdit(row)}
            className="bg-blue-600 px-2 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="bg-red-600 px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="product-list">
      <TitleSection title="Products" subtitle="Manage your products here" />
      <div className="p-4">
        <Table columns={columns} data={products} loading={loading} />
      </div>

    </div>
  );
}

export default ProductList;