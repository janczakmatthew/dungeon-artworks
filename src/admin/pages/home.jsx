import TitleSection from '../components/titlesection';

function AdminHome() {
  return (
    <div className="admin-home">
      <TitleSection title="Dungeon Artworks Dashboard" subtitle="Manage your application settings and data" />
      <div className="content p-4">
        <p>Welcome to the admin dashboard. Use the sidebar to navigate through different sections.</p>
      </div>
    </div>
  );
}

export default AdminHome;