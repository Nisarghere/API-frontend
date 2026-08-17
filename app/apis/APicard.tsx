import React from "react";

const APicard = () => {
  return (
    <div className="w-72 rounded-xl border border-[#E4E4E7] bg-white shadow-sm transition-all duration-200  hover:bg-[#f3f3f5] hover:shadow-md">
      {/* Category */}
      <div className="px-3 pt-4">
        <span className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600">
          Weather
        </span>
      </div>

      {/* API Name + Version */}
      <div className="flex items-center justify-between px-3 pt-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
            <div className="h-4 w-4 rounded-full bg-slate-300" />
          </div>

          <h2 className="text-sm font-semibold text-slate-800">Weather API</h2>
        </div>

        <span className="text-xs font-medium text-slate-400">v1.0.0</span>
      </div>

       <div className="px-3 pt-3">
        <p className="line-clamp-2 text-sm leading-5 text-slate-500">
          Get current weather, forecasts and air-quality information for cities
          around the world.
        </p>
      </div>

       <div className="flex items-center gap-3 px-3 py-4 text-xs text-slate-500">
        <span>
          <span className="font-semibold text-slate-700">3</span> endpoints
        </span>

        <span className="text-slate-300">•</span>

        <span>API Key</span>
      </div>

       <div className="border-t border-slate-200" />

       <div className="flex items-center justify-between px-3 py-3">
        <span className="text-sm font-medium text-emerald-600">Free</span>

        <button className="cursor-pointer rounded-full bg-[#6366F1] px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-[#5558e8]">
          View API
        </button>
      </div>
    </div>
  );
};

export default APicard;
