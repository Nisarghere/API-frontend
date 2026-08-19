"use client";

import { useState } from "react";

interface RateLimit {
  window: number;
  requests: number;
}

interface ApiSpec {
  slug: string;
  title: string;
  logo: string;
  category: string;
  version: string;
  description: string;
  baseurl: string;
  ratelimit: RateLimit;
  apiKey?: string | null;
}

const ApiInfo = ({slug,logo,title,category,version,description,baseurl,ratelimit,apiKey: initialApiKey,}: ApiSpec) => {

  const [apiKey, setApiKey] = useState<string | null>(initialApiKey ?? null);

  const [loading, setLoading] = useState(false);

  async function SubscribeApi() {
    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:5000/api/${slug}/subscribe`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription couldn't complete");
      }

      setApiKey(data.apiKey);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">

       <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex items-start justify-between gap-6">

          <div className="flex gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
              <img
                src={logo}
                alt={`${title} logo`}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <div>
              <div className="mb-1 flex items-center gap-3">
                <h1 className="text-2xl font-semibold text-slate-900">
                  {title}
                </h1>

                <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">
                  v{version}
                </span>
              </div>

              <p className="max-w-2xl text-sm leading-6 text-slate-500">
                {description}
              </p>

              <div className="mt-3 flex gap-3 text-sm text-slate-500">
                <span>{category}</span>
                <span>•</span>
                <span>REST API</span>
              </div>
            </div>
          </div>

          <button
            onClick={SubscribeApi}
            disabled={!!apiKey || loading}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium text-white transition ${
              apiKey
                ? "cursor-not-allowed bg-slate-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {apiKey
              ? "Subscribed"
              : loading
                ? "Subscribing..."
                : "Subscribe"}
          </button>

        </div>
      </div>

      {/* API Overview section */}
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
              {baseurl}
            </p>
          </div>

           <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-xs font-medium uppercase text-slate-400">
              Authentication
            </p>

            {apiKey ? (
              <div className="mt-2">
                <p className="mb-1 text-xs text-slate-400">
                  Your API Key
                </p>

                <p className="break-all font-mono text-sm text-slate-700">
                  {apiKey}
                </p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-slate-700">
                Subscribe to get an API key
              </p>
            )}
          </div>

           <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-xs font-medium uppercase text-slate-400">
              Rate Limit
            </p>

            <p className="mt-2 text-sm text-slate-700">
              {ratelimit.requests} requests / {ratelimit.window}s
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ApiInfo;