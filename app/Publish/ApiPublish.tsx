import React from "react";

const ApiPublish = () => {
  return (
    <>
  <div className="grid min-h-screen grid-cols-[1fr_4fr] bg-slate-50">

    <div className="border-r border-slate-200 bg-white ">
      <div className="flex items-center justify-center p-4">
        <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 outline-none focus:border-slate-400">
          <option>Smash-Api</option>
          <option>ApiObtain</option>
        </select>
      </div>

      <div className="flex w-full flex-col gap-1 p-4">
        <h3 className="cursor-pointer rounded-md px-3 py-2 font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900">
          Endpoints
        </h3>

        <h3 className="cursor-pointer rounded-md px-3 py-2 font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900">
          Settings
        </h3>
      </div>
    </div>

    <div className="p-8">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            API Details
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Configure the basic information for your API.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex flex-col gap-6">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                API Logo
              </label>

              <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400 hover:border-slate-400">
                Upload
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                API Name
              </label>

              <input
                type="text"
                placeholder="e.g. Weather API"
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Base URL
              </label>

              <input
                type="url"
                placeholder="https://api.example.com"
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400"
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
                  className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Category
                </label>

                <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-slate-400">
                  <option>Select category</option>
                  <option>Weather</option>
                  <option>Finance</option>
                  <option>Social</option>
                  <option>AI</option>
                  <option>Utilities</option>
                </select>
              </div>

            </div>

          </div>

          <div className="mt-8 flex justify-end border-t border-slate-100 pt-5">
            <button className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
              Save API
            </button>
          </div>

        </div>
      </div>
    </div>

  </div>
</>
  );
};

export default ApiPublish;
