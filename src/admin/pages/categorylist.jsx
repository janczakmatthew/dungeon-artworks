import TitleSection from "../components/titlesection";

function CategoryList() {
  return (
    <div className="category-list">
      <TitleSection title="Categories" subtitle="Manage your categories here" />
      <div className="p-4">
        <p>List of categories will be displayed here.</p>
      </div>
    </div>
  );
}

export default CategoryList;