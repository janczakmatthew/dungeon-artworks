function PaymentsTab() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Payment Settings</h2>
      <p className="text-gray-300 mb-4">
        Configure your payment provider details.
      </p>
      <input
        type="text"
        placeholder="Stripe API Key"
        className="w-full p-2 rounded bg-slate-900 text-white border border-gray-600 mb-2"
      />
      <input
        type="text"
        placeholder="PayPal Client ID"
        className="w-full p-2 rounded bg-slate-900 text-white border border-gray-600"
      />
    </div>
  );
}

export default PaymentsTab;
