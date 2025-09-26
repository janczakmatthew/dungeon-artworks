function AnalyticsTab() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Google Analytics</h2>
      <p className="text-gray-300 mb-4">
        Manage your Google Analytics tracking settings here.
      </p>
      <input
        type="text"
        placeholder="Enter Tracking ID (e.g. UA-XXXXX-Y)"
        className="w-full p-2 rounded bg-slate-900 text-white border border-gray-600"
      />
    </div>
  );
}

export default AnalyticsTab;
