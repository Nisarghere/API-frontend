"use client";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import SearchStudio from "./SearchStudio";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiFetch } from "../lib/apiFetch";

interface Api {
  _id: string;
  title: string;
  description: string;
  publisher: string;
  version: string;
  logo: string;
}

const Studio = () => {
  const [data, setdata] = useState<Api[]>([]);
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState<
    "success" | "error" | ""
  >("success");

  const router = useRouter();

     async function handleApiResponse() {
      const response = await fetch("http://localhost:5000/api/studio", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      setdata(data.api);
    }
    handleApiResponse();
 
  async function DeleteApi(apiId: string) {
    try {
      const response = await apiFetch(
        `http://localhost:5000/api/studio/delete/${apiId}`,
        {
          method: "DELETE",
        },
      );

      if (response.success) {
        setNotification(response.message);
        setNotificationType("success");

        router.refresh();
      }

      setTimeout(() => {
        setNotification("");
        setNotificationType("");
      }, 2000);
    } catch (err) {
      if (err instanceof Error) {
        setNotification(err.message);
        setNotificationType("error");
      }
      setTimeout(() => {
        setNotification("");
        setNotificationType("");
      }, 2000);
    }
  }

  function handleEdit(id: string) {
    router.push(`http://localhost:3000/Publish?edit=${id}`);
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {notification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
              <span className="text-2xl">✓</span>
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              Notification
            </h3>

            <p className="mt-2 text-sm text-slate-600">{notification}</p>

            <button
              type="button"
              onClick={() => setNotification("")}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="relative flex justify-between">
        <div className="mx-auto">
          <div className="flex justify-center">
            <div className="relative  mt-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4  text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className=" w-100  focus:w-110 focus:py-1.8 duration-300 transition-all  pl-9 pr-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E4E4E7]"
              />
            </div>
          </div>
        </div>
        <Link href="/Publish">
          <button className="absolute top-7 right-0 mr-5 rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700">
            + Add Api Projects
          </button>
        </Link>
      </div>

      <div className="m-14 rounded-2xl border border-blue-200 bg-white/50 p-5">
        <div className="flex flex-wrap gap-4">
          {data.length <= 0 && <div>You haven't published any APi yet...</div>}
          {data.map((api) => (
            <div
              key={api._id}
              className="group flex min-h-52 w-90 flex-col justify-between rounded-xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                      <div className="h-4 w-4 rounded-full bg-blue-500" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {api.title}
                      </h3>

                      <div className="mt-0.5 flex items-center gap-2">
                        <span className="text-xs text-blue-600">
                          v{api.version}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span className="text-xs text-emerald-600">
                          Published
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-5 line-clamp-2 text-sm leading-5 text-slate-500">
                  {api.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-blue-50 pt-4">
                <span className="text-xs text-slate-400">3 endpoints</span>

                <div className="flex gap-2">
                  <button
                    onClick={() => DeleteApi(api._id)}
                    className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={(e) => handleEdit(api._id)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Studio;
