"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import APicard from "./APicard";

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
}

interface ApiRequest {
  message: string;
  apis: Api[];
}

const Explore = () => {
  const [data, setdata] = useState<ApiRequest | null>(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function handleApiResponse() {
      const response = await fetch("http://localhost:5000/api/", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();
      setdata(data);
      setloading(false);
      console.log(data);
    }
    handleApiResponse();
  }, []);

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
              <ul className="text-left  flex flex-col  ">
                <li className="text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2">
                  Cybersecurity
                </li>
                <li className="text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2">
                  Finance
                </li>
                <li className="text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2">
                  Weather
                </li>
                <li className="text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2">
                  Jobs
                </li>
                <li className="text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2">
                  Movies
                </li>
                <li className="text-[#0F172A] text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2">
                  Cryptography
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-[#d9d9da] m-4 rounded-xl">
          <div className="h-25">
            <SearchBar />
          </div>
          <h2 className="font-semibold text-xl  ml-5 p-3">ALL APIs </h2>
          <div className="flex justify-center">
            {loading ? (
              <div className="flex justify-center items-center h-[50vh] ">
                Loading APIs
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-9 m-3">
                {data?.apis.map((item) => (
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
