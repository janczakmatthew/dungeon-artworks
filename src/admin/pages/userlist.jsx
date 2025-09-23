import TitleSection from "../components/titlesection";

function UserList() {
  return (
    <div className="user-list">
      <TitleSection title="Users" subtitle="Manage your users here" />
      <div className="p-4">
        <p>List of users will be displayed here.</p>
      </div>
    </div>
  );
}

export default UserList;