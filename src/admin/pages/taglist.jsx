import TitleSection from "../components/titlesection";

function TagList() {
  return (
    <div className="tag-list">
      <TitleSection title="Tags" subtitle="Manage your tags here" />
      <div className="p-4">
        <p>List of tags will be displayed here.</p>
      </div>
    </div>
  );
}   

export default TagList;