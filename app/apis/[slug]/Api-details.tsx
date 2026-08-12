"use client";
import React, { useState } from "react";
import { Copy } from "lucide-react";
import {
  Check,
  Square,
  SquareCheck,
  CheckSquare,
  ArrowRight,
} from "lucide-react";
const ApiDetails = () => {
  const [copied, setcopied] = useState(false);

  function copybtn() {
    navigator.clipboard.writeText("https://smashapi.com/weather-api");
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 2000);
  }
  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* API profile */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200">
              <div className="h-4 w-4 rounded-full bg-slate-400" />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">Weather API</h2>
              {/* <span className="text-xs text-slate-400">
          v1.0
        </span> */}
            </div>
          </div>

          <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
        </div>

        <div className="mt-5">
          <p className="text-sm leading-6 text-slate-600">
            Get current weather, forecasts and air-quality information for
            cities around the world.
          </p>
        </div>

        <div className="my-5 h-px bg-slate-100" />

        {/* Footer */}
        <div className="flex items-end justify-between">
          {/* Publisher */}
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
              Published by
            </p>

            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                O
              </div>

              <span className="text-sm font-medium text-slate-700">OpenAI</span>
            </div>
          </div>

          {/* Listed */}
          <div className="text-right">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
              Listed
            </p>

            <p className="text-sm font-medium text-slate-700">25 Aug 2026</p>
          </div>
        </div>
      </div>

      <div className="mt-5 gap-2 flex flex-col">
        <h3 className="text-slate-900 font-semibold">Base url</h3>
        <div className="p-2 border border-slate-200 shadow-sm rounded-xl  flex items-center justify-between">
          <p className="text-slate-500 truncate w-100 ">
            https://smashapi.com/weather-api
          </p>

          <button onClick={copybtn}>
            {copied ? (
              // <Check size={16} strokeWidth={3} className="text-slate-500" />
              <SquareCheck
                size={18}
                strokeWidth={3}
                className="text-slate-500"
              />
            ) : (
              <Copy size={16} className="text-slate-500 cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      <div className="mt-5 gap-2 flex flex-col">
        <h3 className="text-slate-900 font-semibold">Endpoints</h3>
        <div className="flex justify-between border items-center p-2 border-[#E2E8F0]">
          <div className="flex gap-6">
            <h3 className="text-emerald-700 font-bold">GET</h3>
            <p className="text-emerald-600">/Weather/:city</p>
          </div>
          <ArrowRight size={14} strokeWidth={3} />
        </div>
        
      </div>
    </div>
  );
};

export default ApiDetails;
