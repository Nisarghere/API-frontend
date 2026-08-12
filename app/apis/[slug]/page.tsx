"use client";
import Navbar from "@/app/Navbar/Navbar";
import React, { useState } from "react";

import ApiDetails from "./Api-details";
import ReqRes from "./ReqRes";

const page = () => {


  return (
    <>
      <Navbar />
      <div className="grid  grid-cols-[1fr_2fr] bg-[#F8FAFC] border m-3 border-[#E7E5E4] rounded-xl min-h-screen">
        <section className="w-[400px]  p-4">
         <ApiDetails />
        </section>

        <section className="border border-[#E2E8F0] m-4 rounded">
          <ReqRes/>
        </section>
      </div>
    </>
  );
};

export default page;

//       <div className="mt-5 p-3">
//   {/* Description  */}
//   {/* <h3 className="font-bold">Description</h3> */}

// </div>2
