import React from "react";

const ApiPublish = () => {
  return (
    <>
  <div className="min-h-screen bg-[#F6F8FB] px-6 py-10">
  <div className="mx-auto max-w-4xl">

    <div className="mb-8">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">
        Publish API
      </h1>

      <p className="mt-1 text-sm text-slate-500">
        Add your API details and configure the endpoints you want to expose.
      </p>
    </div>

    <div className="space-y-6">

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-slate-900">
            API Information
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Basic information about your API.
          </p>
        </div>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              API Logo
            </label>

            <button className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400 transition hover:border-slate-400 hover:bg-slate-100">
              Upload
            </button>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              API Name
            </label>

            <input
              type="text"
              placeholder="Weather API"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-slate-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Base URL
            </label>

            <input
              type="url"
              placeholder="https://api.example.com"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-slate-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Version
              </label>

              <input
                type="text"
                placeholder="1.0.0"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Category
              </label>

              <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-slate-400">
                <option>Select category</option>
                <option>Weather</option>
                <option>Finance</option>
                <option>AI</option>
                <option>Social</option>
                <option>Utilities</option>
              </select>
            </div>

          </div>

        </div>
      </section>


      <section className="rounded-xl border border-slate-200 bg-white p-6">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Endpoints
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Define the routes available through your API.
            </p>
          </div>

          <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            + Add Endpoint
          </button>
        </div>


        <div className="space-y-3">

          <div className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
            <div className="flex items-center gap-3">

              <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-600">
                GET
              </span>

              <div>
                <p className="font-mono text-sm font-medium text-slate-800">
                  /weather/:city
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Get current weather information.
                </p>
              </div>

            </div>

            <button className="text-xs font-medium text-slate-400 hover:text-red-500">
              Remove
            </button>
          </div>


          <div className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
            <div className="flex items-center gap-3">

              <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-blue-600">
                GET
              </span>

              <div>
                <p className="font-mono text-sm font-medium text-slate-800">
                  /forecast/:city
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  Get the weather forecast.
                </p>
              </div>

            </div>

            <button className="text-xs font-medium text-slate-400 hover:text-red-500">
              Remove
            </button>
          </div>

        </div>
      </section>


      <section className="rounded-xl border border-slate-200 bg-white p-6">

        <div className="mb-5">
          <h2 className="text-base font-semibold text-slate-900">
            Documentation
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Connect an OpenAPI specification for interactive documentation.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            OpenAPI Specification URL
          </label>

          <input
            type="url"
            placeholder="https://api.example.com/openapi.json"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400"
          />
        </div>

      </section>


      <div className="flex items-center justify-end gap-3 pb-6">
        <button className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
          Cancel
        </button>

        <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
          Publish API
        </button>
      </div>

    </div>
  </div>
</div>
</>
  );
};

export default ApiPublish;
