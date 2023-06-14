import React from "react";
import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <div>
      <div className="bg-[#007456] h-4/5">
        <h1 className="text-center text-5xl lg:text-6xl text-white py-10">
          Our Services
        </h1>
        <div className="grid grid-cols-3 px-5 py-5 ml-[2rem] pb-10 ">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl shadow-black ease-in-out duration-150 text-start  ">
            <div className="flex justify-evenly items-center">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                Company services
              </h5>
            </div>
            <div className="flex py-3 justify-center">
              <p className=" text-[#007456] flex gap-2 text-center">
                {" "}
                Includes reciving emails about latset jobs in your field and
                finding what you are looking for always{" "}
              </p>
            </div>
            <p class="mb-3 font-normal text-gray-700 "></p>
            <div className="flex justify-center">
              <button className="bg-[#007456] px-2 py-2 text-white">
              <NavLink to="/about">Find more about us</NavLink>
              </button>
            </div>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl shadow-black ease-in-out duration-150 text-start  ">
            <div className="flex justify-evenly items-center">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                Jobs
              </h5>
            </div>
            <div className="flex py-3 justify-center">
              <p className=" text-[#007456] flex gap-2 text-center">
                {" "}
                Get every job in every category you want,and apply to the
                company of your desire with the option to use the application
                with full access{" "}
              </p>
            </div>
            <p class="mb-3 font-normal text-gray-700 "></p>
            <div className="flex justify-center">
              <button className="bg-[#007456] px-2 py-2 text-white">
                <NavLink to="/about">Find more about us</NavLink>
              </button>
            </div>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl shadow-black ease-in-out duration-150 text-start  ">
            <div className="flex justify-evenly items-center">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                Company services
              </h5>
            </div>
            <div className="flex py-3 justify-center">
              <p className=" text-[#007456] flex gap-2 text-center">
                {" "}
                Have your own dashboard as company with multiples options,with
                just view validation steps{" "}
              </p>
            </div>
            <p class="mb-3 font-normal text-gray-700 "></p>
            <div className="flex justify-center">
              <button className="bg-[#007456] px-2 py-2 text-white">
              <NavLink to="/about">Find more about us</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
