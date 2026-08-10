import Navbar from "@/app/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 border m-3 border-[#E7E5E4] rounded-xl min-h-screen">
        <section className="border border-[#E2E8F0] m-4 rounded p-4">
          <div className="flex gap-3">
            <div className="h-9 w-9 p-3 bg-gray-600 rounded justify-center flex items-center">
              <div className="bg-white h-3 w-4 rounded-full " />
            </div>
            <div className="flex  justify-between w-full items-center ">
              {/* Name of the api and publisher name */}
              <h2 className="text-2xl text-gray-400">Weather API</h2>
              <div className="flex items-center gap-1.5 text-sm bg-emerald-600 text-white font-bold px-3 py-1 rounded-full  w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                By OpenAI
              </div>{" "}
            </div>
          </div>
          <div className="mt-5 p-3">
            {/* Description  */}
            {/* <h3 className="font-bold">Description</h3> */}
            <p>
              Get current weather, forecasts and air-quality information for
              cities around the world.
            </p>
          </div>
        </section>

        <section className="border border-[#E2E8F0] m-4 rounded">
          section 2
        </section>
      </div>
    </>
  );
};

export default page;
