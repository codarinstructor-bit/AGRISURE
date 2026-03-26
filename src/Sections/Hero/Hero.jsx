import React from "react";
import { IoIosVideocam } from "react-icons/io";
import "./Hero.css";
import heroImg from "../../assets/images/hero-img.png";

function Hero() {
  return (
    <body>
      <section class="bg-neutral-primary mt-24 md:mt-36">
        <div class="py-8 px-4 mt-24 mx-auto max-w-screen-2xl text-center lg:py-16">
          <p class="mb-3 p-2 rounded-lg text-xs text-uppercase text-[#11D432] font-semibold bg-[#dcf8e1] inline-block">
            THE FUTURE OF PRECISION AGRICULTURE
          </p>
          <h1 class="mb-6 text-4xl font-extrabold tracking-tighter text-heading md:text-5xl lg:text-6xl">
            Know Your Harvest{" "}
            <span className="block text-[#11D432]">Before You Plant</span>
          </h1>
          <p class="mb-8 font-normal text-body text-xs md:text-lg">
            Data-driven insights for modern farming. Predict yields, manage
            risks, and <br className=" hidden md:block" />
            maximize profitability with our AI-powered agricultural intelligence
            platform.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
            <button
              type="button"
              class="inline-flex items-center justify-center text-white bg-black box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium rounded-base text-base px-5 py-3 focus:outline-none"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-base px-5 py-3 focus:outline-none flex items-center gap-2"
            >
              <IoIosVideocam className=" text-[#11D432]" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="img-container bg-[#e3f4e6] p-5 m-3 md:p-20 md:pb-36 relative shadow-xl md:m-5 rounded-lg">
          <img src={heroImg} alt="" className=" w-fit mx-auto" />

          <div className="mini-card absolute bottom-0 left-0 hidden md:block">
            <div className="sub-card bg-white shadow-xl w-fit p-6 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="circle w-3 h-3 bg-[#11D432] rounded-full"></div>
                <h4 className=" font-semibold pb-2">Projected Yield</h4>
              </div>
              <h1 className=" font-bold text-3xl pb-2">+24.8%</h1>
              <p>vs. Last Season Average</p>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Hero;
