import React from "react";
import { FaCheck } from "react-icons/fa6";

function UsersSection() {
  return (
    <div>
      <section className="user-section bg-[#111827] p-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="box-1">
            <div className="border-2 border-gray-200 rounded-lg p-10">
              <div className="text">
                <h5 className=" text-[#11D432] pb-3 text-sm">FOR PRODUCERS</h5>
                <h1 className=" font-bold text-3xl pb-3 text-white">Farmers</h1>

                <div className="list leading-11">
                  <p className=" text-white flex gap-2 items-center">
                    <FaCheck /> Maximize yield per acre with precision inputs
                  </p>
                  <p className=" text-white flex gap-2 items-center">
                    <FaCheck /> Automated field scouting reports
                  </p>
                  <p className=" text-white flex gap-2 items-center">
                    <FaCheck /> Direct market price integration
                  </p>
                </div>
              </div>
              <div className="button mt-3">
                <button className=" bg-transparent border-gray-200 border-2 outline-0 text-white w-full p-3 rounded-xl">
                  Learn more for Farmers
                </button>
              </div>
            </div>
          </div>
          <div className="box-2">
            <div className="border-2 border-gray-200 rounded-lg p-10">
              <div className="text">
                <h5 className=" text-[#11D432] pb-3 text-sm">FOR FINANCE</h5>
                <h1 className=" font-bold text-3xl pb-3 text-white">Lenders</h1>

                <div className="list leading-11">
                  <p className=" text-white flex gap-2 items-center">
                    <FaCheck /> Assess credit risk with real-time data
                  </p>
                  <p className=" text-white flex gap-2 items-center">
                    <FaCheck /> Monitor collateral health throughout the season
                  </p>
                  <p className=" text-white flex gap-2 items-center">
                    <FaCheck /> Scalable reporting for portfolio management
                  </p>
                </div>
              </div>
              <div className="button mt-3">
                <button className=" bg-transparent border-gray-200 border-2 outline-0 text-white w-full p-3 rounded-xl">
                  Learn more for Lenders
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UsersSection;
