import { useEffect, useState } from "react";
import { fetchFromTable, upsertIntoTable } from "../../../utils/supabaseQuery";

function SiteInfoTab() {
  const [siteName, setSiteName] = useState("");
  const [siteDescription, setSiteDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch site info on mount
  useEffect(() => {
    async function loadSettings() {
      setLoading(true);
      const settings = await fetchFromTable({ table: "settings", columns: "key,value" });

      if (settings) {
        const nameSetting = settings.find(s => s.key === "site_name");
        const descSetting = settings.find(s => s.key === "site_desc");

        setSiteName(nameSetting?.value || "");
        setSiteDescription(descSetting?.value || "");
      }
      setLoading(false);
    }
    loadSettings();
  }, []);

  // Save handler
  async function handleSave() {
    setSaving(true);
    setMessage("");

    const updates = [
      { key: "site_name", value: siteName },
      { key: "site_desc", value: siteDescription },
    ];

    const result = await upsertIntoTable("settings", updates, "key");

    if (result) {
      setMessage("✅ Settings saved successfully.");
    } else {
      setMessage("❌ Failed to save settings.");
    }

    setSaving(false);
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Site Information</h2>
      <p className="text-gray-300 mb-4">
        Update your site’s name, description, and branding.
      </p>

      {loading ? (
        <p className="text-gray-400">Loading settings...</p>
      ) : (
        <>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="Site Name"
            className="w-full p-2 rounded bg-slate-900 text-white border border-gray-600 mb-2"
          />
          <textarea
            value={siteDescription}
            onChange={(e) => setSiteDescription(e.target.value)}
            placeholder="Site Description"
            className="w-full p-2 rounded bg-slate-900 text-white border border-gray-600"
            rows={4}
          />

          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>

          {message && <p className="mt-2 text-sm text-gray-300">{message}</p>}
        </>
      )}
    </div>
  );
}

export default SiteInfoTab;
