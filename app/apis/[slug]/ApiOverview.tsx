const ApiOverview = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">

      <h2 className="mb-5 text-lg font-semibold text-slate-900">
        API Overview
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-lg border border-slate-200 p-4">
          <p className="text-xs font-medium uppercase text-slate-400">
            Base URL
          </p>

          <p className="mt-2 break-all font-mono text-sm text-slate-700">
            https://api.example.com/v1
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <p className="text-xs font-medium uppercase text-slate-400">
            Authentication
          </p>

          <p className="mt-2 text-sm text-slate-700">
            API Key
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 p-4">
          <p className="text-xs font-medium uppercase text-slate-400">
            Rate Limit
          </p>

          <p className="mt-2 text-sm text-slate-700">
            100 requests / minute
          </p>
        </div>

      </div>
    </div>
  );
};

export default ApiOverview;