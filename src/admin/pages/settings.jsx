import TitleSection  from "../components/titlesection";

function Settings() {
  return (
    <div className="settings">
      <TitleSection title="Settings" subtitle="Manage your settings here" />
      <div className="p-4">
        <p>Settings options will be displayed here.</p>
      </div>
    </div>
  );
}

export default Settings;