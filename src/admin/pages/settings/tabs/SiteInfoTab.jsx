import { useEffect, useState } from "react";
import { fetchFromTable, upsertIntoTable, uploadMedia } from "../../../utils/supabaseQuery";

function SiteInfoTab() {

  //Set State of inputs
  const [siteName, setSiteName] = useState("");
  const [siteDescription, setSiteDescription] = useState("");
  const [faviconUrl, setFaviconUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [favicon, setFaviconFile] = useState(null);
  const [logo, setLogoFile] = useState(null);

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
        const faviconSetting = settings.find(s => s.key === 'favicon');
        const logoSetting = settings.find(s => s.key === 'logo');

        setSiteName(nameSetting?.value || "");
        setSiteDescription(descSetting?.value || "");
        setFaviconUrl(faviconSetting?.value || "");
        setLogoUrl(logoSetting?.value || "");
      }
      setLoading(false);
    }
    loadSettings();
  }, []);

  // Handle file change
  const handleFileChange = (e, setFile, setUrl) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      setUrl(URL.createObjectURL(file)); // Display the selected file as a URL
    }
  };

  // Save handler
  async function handleSave() {
    setSaving(true);
    setMessage("");

    const updates = [
      { key: "site_name", value: siteName },
      { key: "site_desc", value: siteDescription },
    ];

    if (favicon) {
      try {
        const faviconUrl = await uploadMedia(favicon, 'branding', 'favicon');
        updates.push({ key: "favicon", value: faviconUrl });
        setFaviconUrl(faviconUrl);
      } catch (error) {
        console.error("Error uploading favicon:", error);
        setMessage("❌ Failed to upload favicon.");
        setSaving(false);
        return;
      }
    }

    if (logo) {
      try {
        const logoUrl = await uploadMedia(logo, 'branding', 'logos');
        updates.push({ key: "logo", value: logoUrl });
        setLogoUrl(logoUrl);
      } catch (error) {
        console.error("Error uploading logo:", error);
        setMessage("❌ Failed to upload logo.");
        setSaving(false);
        return;
      }
    }

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

          {/* Favicon input */}
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setFaviconFile, setFaviconUrl)}
            className="mt-4 w-full p-2 rounded bg-slate-900 text-white border border-gray-600"
            accept="image/x-icon,image/png,image/jpeg"
          />
          <input
            type="text"
            value={faviconUrl}
            readOnly
            className="mt-2 w-full p-2 rounded bg-slate-900 text-white border border-gray-600"
            placeholder="Favicon URL"
          />
          {faviconUrl && (
            <img
              src={faviconUrl}
              alt="Favicon Preview"
              className="mt-2 h-10 w-10 object-contain border border-gray-600 rounded"
            />
          )}

          {/* Logo input */}
          <input
            type="file"
            onChange={(e) => handleFileChange(e, setLogoFile, setLogoUrl)}
            className="mt-4 w-full p-2 rounded bg-slate-900 text-white border border-gray-600"
            accept="image/png,image/jpeg"
          />
          <input
            type="text"
            value={logoUrl}
            readOnly
            className="mt-2 w-full p-2 rounded bg-slate-900 text-white border border-gray-600"
            placeholder="Logo URL"
          />
          {logoUrl && (
            <img
              src={logoUrl}
              alt="Logo Preview"
              className="mt-2 h-16 object-contain border border-gray-600 rounded"
            />
          )}


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
