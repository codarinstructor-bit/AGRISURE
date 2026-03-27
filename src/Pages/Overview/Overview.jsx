/* eslint-disable react-hooks/set-state-in-effect */
import React from "react";
import { useEffect, useState } from "react";

function Overview() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("loan_result");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);
  return (
    <div>
      {/* Header */}
      <p className="text-[12px] tracking-[3px] text-[#7b807b] mb-2.5 font-bold">
        STRATEGIC INTELLIGENCE
      </p>
      <h1 className="text-[40px] md:text-[58px] text-[#0b5e20] mb-8 font-extrabold">
        Yield Forecast
      </h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        {/* Commodity */}
        <div className="bg-[#fbfbf9] rounded-[28px] p-7 shadow-sm">
          <h3 className="text-[14px] tracking-[2px] text-[#5b5f5b] mb-5 font-bold">
            SELECT COMMODITY
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="h-22.5 rounded-[20px] bg-[#0b5e20] text-white border-[3px] border-[#d8f0dd] flex items-center justify-center font-bold">
              MAIZE
            </div>
            <div className="h-22.5 rounded-[20px] bg-[#f0f1ee] flex items-center justify-center font-bold text-[#444]">
              RICE
            </div>
            <div className="h-22.5 rounded-[20px] bg-[#f0f1ee] flex items-center justify-center font-bold text-[#444]">
              CASSAVA
            </div>
            <div className="h-22.5 rounded-[20px] bg-[#f0f1ee] flex items-center justify-center font-bold text-[#444]">
              SOYBEANS
            </div>
          </div>
        </div>

        {/* Yield Forecast */}
        <div className="lg:col-span-2 bg-[#005d15] text-white rounded-[28px] p-7 shadow-sm">
          <div className="flex justify-between mb-6">
            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold">
              ACTIVE ANALYSIS
            </span>

            <div className="text-right text-sm opacity-90">
              TOTAL AREA <br />
              <strong>3.0 Hectares</strong>
            </div>
          </div>

          <h2 className="text-[60px] md:text-[78px] font-extrabold leading-none mb-2">
            {data?.predicted_yield || "0.0"}{" "}
            <span className="text-[22px] font-medium">Tons</span>
          </h2>

          <p className="text-[#d7eadb] mb-6">
            Projected Total Yield — Maize Cluster
          </p>

          <div className="h-40 bg-white/5 rounded-[20px] flex items-end gap-2.5 p-5">
            <div className="w-6 h-7 bg-white/30 rounded-t"></div>
            <div className="w-6 h-10 bg-white/30 rounded-t"></div>
            <div className="w-6 h-8.75 bg-white/30 rounded-t"></div>
            <div className="w-6 h-13 bg-white/30 rounded-t"></div>
            <div className="w-6 h-16.25 bg-white/30 rounded-t"></div>
            <div className="w-6 h-18.75 bg-white/30 rounded-t"></div>
            <div className="w-6 h-22 bg-white rounded-t"></div>
            <div className="w-6 h-20 bg-white/30 rounded-t"></div>
            <div className="w-6 h-15 bg-white/30 rounded-t"></div>
            <div className="w-6 h-12 bg-white/30 rounded-t"></div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {/* Inputs */}
        <div className="bg-[#fbfbf9] rounded-[28px] p-7 shadow-sm">
          <h3 className="text-[14px] tracking-[2px] text-[#5b5f5b] mb-5 font-bold">
            FARM INPUTS
          </h3>

          <InfoRow label="Farm Size (HA)" value="3.0" />
          <InfoRow label="Input Cost (USD)" value="$1,200" />
          <InfoRow label="Season (Days)" value="120" />
        </div>

        {/* Risk */}
        <div className="bg-[#fbfbf9] rounded-[28px] p-7 shadow-sm text-center">
          <h3 className="text-[14px] tracking-[2px] text-[#5b5f5b] mb-5 font-bold">
            RISK ASSESSMENT
          </h3>

          <div className="w-37.5 h-37.5 border-14 border-[#0b5e20] rounded-full flex items-center justify-center text-[42px] font-extrabold text-[#0b5e20] mx-auto my-5">
            {data?.risk_score || "--"}
          </div>

          <p className="text-[#555] leading-7">
            Low correlation with regional drought patterns. Previous repayment
            history remains strong.
            <span className="text-[#0b5e20] font-bold">
              {" "}
              Recommended for expansion.
            </span>
          </p>
        </div>

        {/* Lending */}
        <div className="bg-[#fbfbf9] rounded-[28px] p-7 shadow-sm">
          <h3 className="text-[14px] tracking-[2px] text-[#5b5f5b] mb-5 font-bold">
            LENDING DECISION
          </h3>

          <div className="bg-[#eef3ee] p-5 rounded-[20px] mb-5">
            <p className="text-[#0b5e20] font-extrabold text-sm">
              ● PRE-APPROVED
            </p>
            <h2 className="text-[54px] text-[#0b5e20] font-extrabold my-2">
              ${data?.loan_amount || 0}
            </h2>
            <p className="text-[#555]">
              Recommended facility based on current inputs
            </p>
          </div>

          <div className="bg-white p-4 rounded-[16px] flex justify-between font-semibold mb-5">
            <span>Interest Rate</span>
            <strong>4.2%</strong>
          </div>

          <button className="w-full py-4 rounded-full bg-[#0b5e20] text-white font-bold">
            Finalize Application →
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Financial */}
        <div className="bg-[#fbfbf9] rounded-[28px] p-7 shadow-sm">
          <h3 className="text-[14px] tracking-[2px] text-[#5b5f5b] mb-5 font-bold">
            FINANCIAL PROJECTIONS
          </h3>

          <div className="grid grid-cols-3 gap-5 mb-6">
            <div>
              <p className="text-xs text-[#777] mb-1 uppercase">Revenue</p>
              <h2>1.8M</h2>
            </div>
            <div>
              <p className="text-xs text-[#777] mb-1 uppercase">Costs</p>
              <h2 className="text-[#c11]">600K</h2>
            </div>
            <div className="bg-[#eef3ee] p-4 rounded-[16px]">
              <p className="text-xs text-[#777] mb-1 uppercase">Profit</p>
              <h2 className="text-[#0b5e20]">{data?.profit || 0}</h2>
            </div>
          </div>

          <div className="flex h-4 rounded-full overflow-hidden bg-[#ddd] mb-4">
            <div className="w-[66.7%] bg-[#0b5e20]"></div>
            <div className="w-[33.3%] bg-[#c11]"></div>
          </div>

          <div className="flex justify-between text-[#555] font-semibold">
            <span>Margin: 66.7%</span>
            <span>ROI: 2.0X</span>
          </div>
        </div>

        {/* Climate */}
        <div className="bg-[#fbfbf9] rounded-[28px] p-7 shadow-sm">
          <h3 className="text-[14px] tracking-[2px] text-[#5b5f5b] mb-5 font-bold">
            CLIMATE SENSITIVITY ANALYSIS
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="p-5 text-center rounded-[20px] border-2 border-[#0b5e20] bg-white text-[#0b5e20] font-bold">
              NORMAL
            </div>
            <div className="p-5 text-center rounded-[20px] bg-[#f0f1ee] font-bold text-[#444]">
              DROUGHT
            </div>
            <div className="p-5 text-center rounded-[20px] bg-[#f0f1ee] font-bold text-[#444]">
              HEAVY RAIN
            </div>
          </div>

          <div className="bg-[#eef3ee] p-5 rounded-[16px] font-semibold text-[#444]">
            Yield impact under "Normal" conditions:
            <strong className="text-[#0b5e20] ml-2">+12.4%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between mb-7 pb-4 border-b border-[#ececec] text-[15px] text-[#555]">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default Overview;
