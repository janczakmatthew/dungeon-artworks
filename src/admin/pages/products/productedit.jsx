import TitleSection from "../components/titlesection";

function ProductEdit() {
  return (
    <div className="product-edit">
      <TitleSection title="Edit Product" subtitle="Modify product details here" />
      <div className="p-4">
        <p>Product edit form will be displayed here.</p>
      </div>
    </div>
  );
}

export default ProductEdit;