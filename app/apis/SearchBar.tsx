import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
