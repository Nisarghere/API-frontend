"use client";
import React, { useState } from "react";
import crypto from "node:crypto";

interface Endpoint {
  id: number;
  method: string;
  path: string;
  description: string;
}

interface ApiSpec {
  title: string;
  baseurl: string;
  version: string;
  category: string;
  endpoints: Endpoint[];
}

const ApiPublish = () => {
  const [title,setTitle] = useState("");
  const [baseurl, setBaseUrl] = useState("");
  const [version, setversion] = useState("");
  const [category, setcategory] = useState("");

  const [endpoints, setendpoints] = useState<Endpoint[]>([
    {
      id: Date.now(),
      method: "",
      path: "",
      description: "",
    },
  ]);

  const payload: ApiSpec = {
    title,
    baseurl,
    version,
    endpoints,
    category,
  };

  async function handleApi() {
    try {
      const response = await fetch("http://localhost:5000/api/publish", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("Somethign went wrong : ", err);
    }
  }

  function AddPoint() {
    setendpoints((prev) => [
      ...prev,
      {
        id: Date.now(),
        method: "",
        path: "",
        description: "",
      },
    ]);
  }

  function DeleteEndpoint(id: number) {
    const newEndpoint = endpoints.filter((endpoint) => endpoint.id !== id);
    setendpoints(newEndpoint);
  }

  const isDisabled = endpoints.some(
    (endpoint) => endpoint.path.trim() === "" && endpoint.method.trim() === "",
  );

  return (
    <>
      <div className="min-h-screen bg-[#F6F8FB] px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Publish API
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Add your API details and configure the endpoints you want to
              expose.
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
                  <label className="flex h-20 w-20 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400 transition hover:border-slate-400 hover:bg-slate-100">
                    Upload
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    API Name
                  </label>

                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={baseurl}
                    onChange={(e) => setBaseUrl(e.target.value)}
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
                      value={version}
                      onChange={(e) => setversion(e.target.value)}
                      type="text"
                      placeholder="1.0.0"
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-slate-400"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Category
                    </label>

                    <select
                      value={category}
                      onChange={(e) => setcategory(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-slate-400"
                    >
                      <option>Select category</option>
                      <option>Weather</option>
                      <option>Finance</option>
                      <option>AI</option>
                      <option>Social</option>
                      <option>Utilities</option>
                      <option>Other</option>
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

                <button
                  onClick={AddPoint}
                  disabled={isDisabled}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  + Add Endpoint
                </button>
              </div>

              <div className="space-y-4">
                {endpoints.map((endpoint) => (
                  <div
                    key={endpoint.id}
                    className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300"
                  >
                    <div className="flex w-full items-start gap-5">
                      <select
                        value={endpoint.method}
                        onChange={(e) =>
                          setendpoints((prev) =>
                            prev.map((item) =>
                              item.id === endpoint.id
                                ? { ...item, method: e.target.value }
                                : item,
                            ),
                          )
                        }
                        className="mt-6 h-9 w-20 shrink-0 cursor-pointer rounded bg-emerald-100 px-3 text-sm font-semibold text-emerald-600 outline-none"
                      >
                        <option>GET</option>
                        <option>POST</option>
                        <option>PATCH</option>
                      </select>

                      {/* Fields */}
                      <div className="min-w-0 flex-1 space-y-3">
                        <div>
                          <div className="mb-1.5 flex items-center justify-between">
                            <label className="block text-xs font-medium text-slate-500">
                              Endpoint path
                            </label>

                            <button
                              type="button"
                              onClick={() => DeleteEndpoint(endpoint.id)}
                              className="rounded-lg p-1 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                              aria-label="Remove endpoint"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M3 6h18" />
                                <path d="M8 6V4h8v2" />
                                <path d="M19 6l-1 14H6L5 6" />
                              </svg>
                            </button>
                          </div>

                          <input
                            value={endpoint.path}
                            onChange={(e) =>
                              setendpoints((prev) =>
                                prev.map((item) =>
                                  item.id === endpoint.id
                                    ? { ...item, path: e.target.value }
                                    : item,
                                ),
                              )
                            }
                            type="text"
                            placeholder="/users"
                            className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 font-mono text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-50"
                          />
                        </div>

                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-slate-500">
                            Description (Optional)
                          </label>

                          <input
                            value={endpoint.description}
                            onChange={(e) =>
                              setendpoints((prev) =>
                                prev.map((item) =>
                                  item.id === endpoint.id
                                    ? { ...item, description: e.target.value }
                                    : item,
                                ),
                              )
                            }
                            type="text"
                            placeholder="Returns current weather information"
                            className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-5">
                <h2 className="text-base font-semibold text-slate-900">
                  Documentation
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Connect an OpenAPI specification for interactive
                  documentation.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  OpenAPI Specification
                </label>

                <label className="flex cursor-pointer items-center justify-between rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-4 hover:border-slate-400">
                  <div>
                    <p className="text-sm font-medium text-slate-700">
                      Upload OpenAPI file
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      JSON or YAML specification
                    </p>
                  </div>

                  <span className="rounded-md bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm">
                    Choose File
                  </span>

                  <input
                    type="file"
                    accept=".json,.yaml,.yml"
                    className="hidden"
                  />
                </label>
              </div>
            </section>

            <div className="flex items-center justify-end gap-3 pb-6">
              <button className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
                Cancel
              </button>

              <button
                onClick={handleApi}
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
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
