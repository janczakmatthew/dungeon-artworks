import { useEffect, useState } from "react";
import { fetchFromTable, withMinimumDelay } from "../utils/supabaseQuery";

import TitleSection from "../components/titlesection";
import Table from "../components/table";

function CategoryList() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategories() {
      // Show loading spinner
      setLoading(true); 

      // Fetch categories and count the amount of product linked to that category
      const data = await withMinimumDelay(fetchFromTable({ table: 'categories', columns: '*, product_categories (id, category_id)'}), 10)

      // Update state
      setCategories(data || []);

      // Hide loading spinner
      setLoading(false);
    }
    getCategories();
  }, []);

  const handleEdit = (product) => {
    console.log("Edit", product);
  };

  const handleDelete = (product) => {
    console.log("Delete", product);
  };

  const columns = [
    {
      header: "Name", 
      key: "name"
    },
    {
      header: "slug",
      render: (_, row) => (
        `$${row.slug}`
      ),
    },
    {
      header: "Products",
      accessor: (row) => row.product_categories.length,
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
    <div className="category-list">
      <TitleSection title="Categories" subtitle="Manage your categories here" />
      <div className="p-4">
        <Table columns={columns} data={categories} loading={loading} />
      </div>
    </div>
  );
}

export default CategoryList;