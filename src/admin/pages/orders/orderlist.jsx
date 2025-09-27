import { useEffect, useState } from "react";
import { fetchFromTable, withMinimumDelay} from "../../utils/supabaseQuery";
import { formatCurrency } from "../../utils/dataHelpers";

import TitleSection from "../../components/titlesection";
import Table from "../../components/table";

function OrderList() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOrders() {
      //Show loading spinner
      setLoading(true);

      //Fecth Orders, customer, and product purchased
      const data = await withMinimumDelay(fetchFromTable({ table: 'orders', columns: '*, profiles(id, full_name)'}), 10);

      //Update state
      setOrders(data || []);

      //Hide loading
      setLoading(false);
    }
    getOrders();
  }, []);

  const handleEdit = (product) => {
    console.log("Edit", product);
  };

  const columns = [
    {
      header: "User",
      render: (_, row) => (
        `${row.profiles.full_name}`
      ),
    }, 
    {
      header: "Status",
      key: "status"
    },
    {
      header: "Total",
      render: (_, row) => (
        `${formatCurrency(row.total)}`
      )
    },
    {
      header: "Placed", 
      render: (_, row) => (
        `${row.created_at}`
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
        </div>
      ),
    },
  ]

  return (
    <div className="order-list">
      <TitleSection title="Orders" subtitle="Manage your orders here" />
      <div className="p-4">
        <Table columns={columns} data={orders} loading={loading} />
      </div>
    </div>
  );
}

export default OrderList;