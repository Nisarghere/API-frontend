import React from "react";
import SearchBar from "./SearchBar";
import APicard from "./APicard";

const Explore = () => {
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
            <div className="grid grid-cols-3  gap-9  m-3">
              <APicard />
              <APicard />
              <APicard />
              <APicard />
              <APicard />
              <APicard />
              <APicard />
              <APicard />
              <APicard />
              <APicard />
              <APicard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
