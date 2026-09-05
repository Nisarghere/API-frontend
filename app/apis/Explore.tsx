"use client";
import React, { useEffect, useReducer, useState } from "react";
import { Search } from "lucide-react";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import APicard from "./APicard";
import { ClockFading } from "lucide-react";

interface Endpoint {
  _id: string;
  method: string;
  path: string;
  description: string;
}

interface Api {
  _id: string;
  title: string;
  baseurl: string;
  version: string;
  category: string;
  logo: string | null;
  endpoints: Endpoint[];
  description: string;
}

interface ApiRequest {
  message: string;
  apis: Api[];
}

const Explore = () => {
  const [data, setdata] = useState<ApiRequest | null>(null);
  const [SelectedCategory, setSelectedCategory] = useState("All");
  const [loading, setloading] = useState(true);
  const [searchInput, setsearchInput] = useState("");

  const router = useRouter();

  const filteredAPI =
    SelectedCategory === "All"
      ? data?.apis
      : data?.apis.filter((api) => api.category === SelectedCategory);

  useEffect(() => {
    async function handleApiResponse() {
      const response = await fetch("http://localhost:5000/api/", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      // console.log(data?.apis.title);
      setdata(data);
      setloading(false);
    }
    handleApiResponse();
  }, []);

  const searchedVal =
    data?.apis.filter((api) =>
      api.title.toLowerCase().includes(searchInput.toLowerCase()),
    ) ?? [];

  function pushApi(apiId: string) {
    router.push(`/apis/${apiId}`);
  }

  return (
    <div>
      <div className="grid grid-cols-[250px_1fr] min-h-screen border border-[#E4E4E7]">
        <div className="border border-t-0 border-b-0 border-[#c9c9fa] border-l-0  h-full ">
          <div className="fixed ">
            <div className="h-full p-5   justify-start text-left">
              <div className=" flex flex-col justify-between gap-7 mt-5">
                <h2 className="text-sm sticky top-0 font-bold text-[#71717A]">
                  Categories
                </h2>
                <div className="mx-auto w-48   border-t border-slate-200" />
              </div>
              <ul className="text-left flex flex-col">
                <li>
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="w-full text-left text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2"
                  >
                    All
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedCategory("Finance")}
                    className="w-full text-left text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2"
                  >
                    Finance
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedCategory("Social")}
                    className="w-full text-left text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2"
                  >
                    Social
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedCategory("Jobs")}
                    className="w-full text-left text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2"
                  >
                    Jobs
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedCategory("Movies")}
                    className="w-full text-left text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2"
                  >
                    Cryptography
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setSelectedCategory("Cryptography")}
                    className="w-full text-left text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2"
                  >
                    Other
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-[#d9d9da] m-4 rounded-xl">
          <div className="h-25">
            <div className="flex justify-center">
              <div className="relative mt-8 w-100 focus-within:w-110 transition-all duration-300">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4  text-gray-400" />
                <input
                  value={searchInput}
                  onChange={(e) => setsearchInput(e.target.value)}
                  type="text"
                  placeholder="Search..."
                  className=" w-full pl-9 pr-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E4E4E7]"
                />
                <div className="">
                  {searchInput && searchedVal.length > 0 && (
                    <div className="absolute top-full left-0 mt-3 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          APIs ({searchedVal.length})
                        </p>
                      </div>

                      <div className="py-1">
                        {searchedVal.slice(0, 5).map((api) => (
                          <button
                            key={api._id}
                            type="button"
                            onClick={() => pushApi(api._id)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150"
                          >
                            {api.logo ? (
                              <img
                                src={api.logo}
                                alt=""
                                className="h-9 w-9 rounded-full object-cover border border-gray-100"
                              />
                            ) : (
                              <div className="h-9 w-9 shrink-0 rounded-full bg-gray-100 flex items-center justify-center">
                                <Globe className="h-4 w-4 text-gray-500" />
                              </div>
                            )}

                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-800 truncate">
                                {api.title}
                              </p>

                              <p className="text-xs text-gray-500 truncate mt-0.5">
                                {api.description}
                              </p>
                            </div>

                            <span className="shrink-0 rounded-md bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-500">
                              {api.category}
                            </span>
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="w-full flex items-center gap-2 px-4 py-3 border-t border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        <Search className="h-4 w-4" />

                        <span>
                          See all results for{" "}
                          <span className="font-medium text-gray-800">
                            "{searchInput}"
                          </span>
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-semibold text-xl  ml-5 p-3">ALL APIs </h2>
          <div className="flex justify-center">
            {loading ? (
              <div className="flex justify-center items-center h-[50vh] ">
                Loading APIs
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-9 m-3">
                {filteredAPI?.map((item) => (
                  <APicard
                    key={item._id}
                    index={item._id}
                    category={item.category}
                    title={item.title}
                    description={item.description}
                    logo={item.logo}
                    endpoints={item.endpoints}
                    version={item.version}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
