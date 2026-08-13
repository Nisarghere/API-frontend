import { Search } from "lucide-react";
import React from "react";
import SearchStudio from "./SearchStudio";

const Studio = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className=" relative flex  justify-between relative">
        <div className="mx-auto">
          <SearchStudio />
        </div>
        <button className="absolute top-7 right-0 px-4 bg-blue-600 py-2 mr-5 rounded text-white rounded hover:bg-blue-700 font-semibold">+ Add Api Projects</button>
      </div>
      <div className="m-14 rounded-2xl border border-blue-200 bg-white/50 p-5">
        <div className="flex flex-wrap gap-4">
          <div className="group flex min-h-52 w-90 flex-col justify-between rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-200  hover:border-blue-200 hover:shadow-md">
            <div>
              <div className="flex items-start justify-between">
                {/* API Info */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                    <div className="h-4 w-4 rounded-full bg-blue-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">
                      Weather API
                    </h3>

                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="text-xs text-blue-600">v1.0.0</span>

                      <span className="h-1 w-1 rounded-full bg-slate-300" />

                      <span className="text-xs text-emerald-600">
                        Published
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 line-clamp-2 text-sm leading-5 text-slate-500">
                Get real-time weather information including temperature,
                humidity, forecast and air quality data.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-blue-50 pt-4">
              <span className="text-xs text-slate-400">3 endpoints</span>

              <div className="flex gap-2">
                <button className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
                  Delete
                </button>

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studio;
