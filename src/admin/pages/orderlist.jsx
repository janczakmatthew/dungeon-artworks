import TitleSection from "../components/titlesection";

function OrderList() {
  return (
    <div className="order-list">
      <TitleSection title="Orders" subtitle="Manage your orders here" />
      <div className="p-4">
        <p>List of orders will be displayed here.</p>
      </div>
    </div>
  );
}

export default OrderList;