import React from "react";
import { CiMap } from "react-icons/ci";
import "../../assets/fonts/fonts.css";

function Precision() {
  return (
    <div>
      <section className="precision p-10 bg-[#F9FAFB]">
        <div className="heading text-center mb-10">
          <h1 className=" text-lg md:text-2xl font-bold">
            Precision Intelligence in 3 Steps
            <div className="w-7 h-1 rounded-xl bg-[#11D432] mx-auto mt-4"></div>
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 grid-container">
          <div className="box-1 text-center">
            <div className="text">
              <div className="flex flex-col items-center gap-3">
                <div className=" text-center bg-white p-3 shadow-lg rounded-lg">
                  <CiMap className="text-[#11D432] text-2xl font-bold" />
                </div>
                <h3 className=" text-2xl font-bold">Map Your Fields</h3>
              </div>
              <p className=" text-xs pt-3">
                Upload boundary data or use satellite imaging to{" "}
                <br className=" hidden md:block" />
                instantly catalog your entire operation.
              </p>
            </div>
          </div>
          <div className="box-2 text-center">
            <div className="text">
              <div className="flex flex-col items-center gap-3">
                <div className=" text-center bg-white p-3 shadow-lg rounded-lg">
                  <CiMap className="text-[#11D432] text-2xl font-bold" />
                </div>
                <h3 className=" text-2xl font-bold">AI Analysis</h3>
              </div>
              <p className=" text-xs pt-3">
                Our engine processes soil health, weather{" "}
                <br className=" hidden md:block" />
                patterns, and historical data to generate models.
              </p>
            </div>
          </div>
          <div className="box-3 text-center">
            <div className="text">
              <div className="flex flex-col items-center gap-3">
                <div className=" text-center bg-white p-3 shadow-lg rounded-lg">
                  <CiMap className="text-[#11D432] text-2xl font-bold" />
                </div>
                <h3 className=" text-2xl font-bold">Optimize Harvest</h3>
              </div>
              <p className=" text-xs pt-3">
                Execute planting and treatment plans with{" "}
                <br className=" hidden md:block" />
                confidence and maximize your return on{" "}
                <br className=" hidden md:block" />
                investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tools p-10 py-14 bg-[#F3F4F6]">
        <div className="grid-container grid grid-cols-1 md:grid-cols-2">
          <div className="box-1 self-center">
            <div className="text">
              <h1 className=" font-bold text-3xl mb-3">
                Tools designed for the modern{" "}
                <br className=" hidden md:block" />
                agronomist.
              </h1>
              <p className=" text-xs md:text-sm">
                We've built a suite of tools that bridge the gap between
                traditional <br className=" hidden md:block" />
                farming wisdom and cutting-edge data science.
              </p>
            </div>
          </div>

          <div className="box-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="sub-box">
                <div className=" bg-gray-200 p-5 rounded-sm">
                  <h4 className=" text-[#11D432] font-semibold text-xl">
                    Yield Prediction
                  </h4>
                  <p>
                    Hyper-local yield forecasting with{" "}
                    <br className=" hidden md:block" />
                    up to 94% accuracy based on{" "}
                    <br className="hidden md:block" />
                    historical trends.
                  </p>
                </div>
              </div>
              <div className="sub-box">
                <div className=" bg-gray-200 p-5 rounded-sm">
                  <h4 className=" text-[#11D432] font-semibold text-xl">
                    Risk Management
                  </h4>
                  <p>
                    Identify potential pest outbreaks{" "}
                    <br className=" hidden md:block" />
                    and drought risks before they{" "}
                    <br className=" hidden md:block" />
                    impact your crop.
                  </p>
                </div>
              </div>
              <div className="sub-box">
                <div className=" bg-gray-200 p-5 rounded-sm">
                  <h4 className=" text-[#11D432] font-semibold text-xl">
                    Profit Optimization
                  </h4>
                  <p>
                    Calculates input costs versus{" "}
                    <br className=" hidden md:block" />
                    market prices to find your optimal{" "}
                    <br className=" hidden md:block" />
                    planting mix.
                  </p>
                </div>
              </div>
              <div className="sub-box">
                <div className=" bg-gray-200 p-5 rounded-sm">
                  <h4 className=" text-[#11D432] font-semibold text-xl">
                    Smart Weather
                  </h4>
                  <p>
                    Micro-climate insights that help{" "}
                    <br className=" hidden md:block" />
                    you decide exactly when to spray{" "}
                    <br className=" hidden md:block" />
                    or harvest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Precision;
