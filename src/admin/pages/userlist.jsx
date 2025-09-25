import { useEffect, useState } from "react";

import { fetchFromTable, withMinimumDelay } from "../utils/supabaseQuery"
import { getUserRole } from "../utils/dataHelpers";

import TitleSection from "../components/titlesection";
import Table from "../components/table";

function UserList() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      //Show loading spinner
      setLoading(true);

      //Fetch Users
      const data = await withMinimumDelay(fetchFromTable({ table: 'profiles', columns: '*' }), 10)

      //update state
      setUsers(data || []);

      //Hide loading
      setLoading(false);
    }
    getUsers()
  }, [])

  const handleEdit = (product) => {
    console.log("Edit", product);
  };

  const handleDelete = (product) => {
    console.log("Delete", product);
  };

  const columns = [
    {
      header: "User",
      render: (_, row) => (
        `${row.full_name}`
      ),
    },
    {
      header: "Role",
      render: (_, row) => (
        <span className="capitalize">{getUserRole(row)}</span>
      )
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
  ]



  return (
    <div className="user-list">
      <TitleSection title="Users" subtitle="Manage your users here" />
      <div className="p-4">
        <Table columns={columns} data={users} loading={loading} />
      </div>
    </div>
  );
}

export default UserList;