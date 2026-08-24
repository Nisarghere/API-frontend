"use client";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

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
 }

const ApiInfo = ({slug,logo, title, category, version, description, baseurl, ratelimit }: ApiSpec) => {

  const [apiKey, setApiKey] = useState<string | null>(null);
  const [apiKeyPreview, setApiKeyPreview] = useState<string | null>(null);
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function getSubApi() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/${slug}/apiPreview`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok) {
          return;
        }

        setApiKeyPreview(data.apiKeyPreview ?? null);
        setSubscriptionId(data.subscriptionId ?? null);
      } catch (error) {
        console.error(error);
      }
    }

    getSubApi();
  }, [slug]);

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
        throw new Error(data.message || "Subscription failed");
      }

      setApiKey(data.apiKey);
      setApiKeyPreview(data.apiKeyPreview);
      setSubscriptionId(data.id);

      toast.success("Subscribed successfully");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function rotateApi() {
    if (!subscriptionId) return;

    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:5000/api/${slug}/${subscriptionId}/rotate`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Rotation failed");
      }

      setApiKey(data.apiKey);
      // setApiKeyPreview(data.apiKeyPreview);

      toast.success("API key rotated successfully");
    } catch (error: any) {
      toast.error(error.message || "Rotation failed");
    } finally {
      setLoading(false);
    }
  }

  async function revokeApi() {
    if (!subscriptionId) return;

    try {
      setLoading(true);

      const response = await fetch(
        `http://localhost:5000/api/${slug}/${subscriptionId}/revoke`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Revoke failed");
      }

      setApiKey(null);
      setApiKeyPreview(null);

      toast.success("API key revoked");
    } catch (error: any) {
      toast.error(error.message || "Revoke failed");
    } finally {
      setLoading(false);
    }
  }

  async function copyApiKey() {
    if (!apiKey) return;

    try {
      await navigator.clipboard.writeText(apiKey);
      setCopied(true);

     setTimeout(()=>{
      setCopied(false)
     }, 1500)
    } catch {
      toast.error("Failed to copy API key");
    }
  }

  const isSubscribed = !!subscriptionId;

  return (
    <div className="space-y-6">
      <ToastContainer />

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
            disabled={isSubscribed || loading}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium text-white transition ${
              isSubscribed
                ? "cursor-not-allowed bg-slate-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubscribed
              ? "Subscribed"
              : loading
                ? "Subscribing..."
                : "Subscribe"}
          </button>
        </div>
      </div>

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
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase text-slate-400">
                Authentication
              </p>

              {isSubscribed && (
                <div className="flex gap-3">
                  <button
                    onClick={rotateApi}
                    disabled={loading}
                    className="text-xs font-medium text-blue-600 transition hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Rotate
                  </button>

                  <button
                    onClick={revokeApi}
                    disabled={loading}
                    className="text-xs font-medium text-red-500 transition hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Revoke
                  </button>
                </div>
              )}
            </div>

            {apiKey ? (
              <div className="mt-3">
                <p className="mb-2 text-xs text-slate-400">
                  Your API Key
                </p>

                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
                  <code className="min-w-0 flex-1 truncate font-mono text-sm text-slate-700">
                    {apiKey}
                  </code>

                  <button
                    onClick={copyApiKey}
                    className="shrink-0 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Keep this key secure. You will not be able to view it again
                  after leaving this page.
                </p>
              </div>
            ) : apiKeyPreview ? (
              <div className="mt-3">
                <p className="mb-2 text-xs text-slate-400">
                  Your API Key
                </p>

                <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                  <code className="font-mono text-sm tracking-wide text-slate-600">
                    {apiKeyPreview}
                    <span className="text-slate-300">
                      ••••••••••••••••
                    </span>
                  </code>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Your API key is hidden for security.
                </p>
              </div>
            ) : (
              <p className="mt-3 text-sm text-slate-500">
                Subscribe to get an API key.
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
