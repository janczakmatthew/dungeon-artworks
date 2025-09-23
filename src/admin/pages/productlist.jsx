import TitleSection from "../components/titlesection";

function ProductList() {
  return (
    <div className="product-list">
      <TitleSection title="Products" subtitle="Manage your products here" />
      <div className="p-4">
        <p>List of products will be displayed here.</p>
      </div>
    </div>
  );
}

export default ProductList;