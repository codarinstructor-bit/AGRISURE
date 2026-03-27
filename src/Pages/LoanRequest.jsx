import React from 'react'
import { useState } from "react";
import { agrisureApi } from "../Api/agrisureApi.js";
import { useNavigate } from "react-router-dom";

function LoanRequest() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "maize",
    farm_size: "",
    input_cost: "",
    season_duration: "",
    location: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const payload = {
        name: formData.name,
        farm_size: Number(formData.farm_size),
        input_cost: Number(formData.input_cost),
        season_duration: Number(formData.season_duration),
        location: formData.location,
        phone: formData.phone,
      };

      await agrisureApi.requestLoan(payload);

      navigate("/dashboard");

    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center px-4 py-10 bg-[#f4f5f1] min-h-screen">
      
      <div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-xl shadow-md">
        
        <h2 className="text-2xl font-bold mb-5 text-[#0b5e20]">
          Loan Request
        </h2>

        {error && (
          <p className="text-red-600 bg-red-100 px-4 py-2 rounded-lg mb-3 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          
          {/* Crop */}
          <select
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5e20]"
          >
            <option value="maize">Maize</option>
            <option value="rice">Rice</option>
            <option value="cassava">Cassava</option>
            <option value="soybeans">Soybeans</option>
          </select>

          {/* Farm Size */}
          <input
            type="number"
            name="farm_size"
            placeholder="Farm Size (Hectares)"
            value={formData.farm_size}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5e20]"
          />

          {/* Cost */}
          <input
            type="text"
            name="input_cost"
            placeholder="Input Cost"
            value={formData.input_cost}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5e20]"
          />

          {/* Season */}
          <input
            type="number"
            name="season_duration"
            placeholder="Season Duration (Days)"
            value={formData.season_duration}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5e20]"
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="Location (e.g Lagos)"
            value={formData.location}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5e20]"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0b5e20]"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full py-3 rounded-lg bg-[#0b5e20] text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Processing...
              </span>
            ) : (
              "Submit Loan Request"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}


export default LoanRequest