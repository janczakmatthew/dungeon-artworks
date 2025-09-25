import { useEffect, useState } from "react";
import { fetchFromTable, withMinimumDelay } from "../utils/supabaseQuery";

import TitleSection from "../components/titlesection";
import Table from "../components/table";

function TagList() {

  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTags() {
      // Show Loading spinner
      setLoading(true);

      // Fecth tags 
      const data = await withMinimumDelay(fetchFromTable({ table: 'tags', columns: '*, product_tags(*)' }), 10)

      // Update state
      setTags(data || []);

      // Hide loading spinner
      setLoading(false);
    }
    getTags();
  }, []);

  const handleEdit = (product) => {
    console.log("Edit", product);
  };

  const handleDelete = (product) => {
    console.log("Delete", product);
  };

  const columns = [
    {
      header: "Tags",
      key: "name"
    },
    {
      header: "slug",
      render: (_, row) => (
        `${row.slug}`
      ),
    },
    {
      header: "Products",
      accessor: (row) => row.product_tags.length,
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
    <div className="tag-list">
      <TitleSection title="Tags" subtitle="Manage your tags here" />
      <div className="p-4">
        <Table columns={columns} data={tags} loading={loading} />
      </div>
    </div>
  );
}

export default TagList;