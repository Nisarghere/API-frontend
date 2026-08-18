const ApiHeader = () => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between gap-6">

        <div className="flex gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
            <span className="text-xl font-semibold text-slate-500">
              API
            </span>
          </div>

          <div>
            <div className="mb-1 flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-slate-900">
                Weather API
              </h1>

              <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">
                v1.0
              </span>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-slate-500">
              Get current weather information and forecasts for cities
              around the world.
            </p>

            <div className="mt-3 flex gap-3 text-sm text-slate-500">
              <span>Weather</span>
              <span>•</span>
              <span>REST API</span>
            </div>
          </div>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
          Subscribe
        </button>

      </div>
    </div>
  );
};

export default ApiHeader;