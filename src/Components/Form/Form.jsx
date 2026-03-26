import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phone: "",
    location: "",
    farm_size: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        "https://agrisure-stff.onrender.com/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Account created successfully!");

      // redirect after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <>
      <section className="form-container">
        <form action="" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded">{error}</div>
          )}
          {success && (
            <div className="bg-green-100 text-green-700 p-2 rounded">
              {success}
            </div>
          )}
          <div className="input mb-5">
            <div className="text">
              <h4 className=" font-bold mb-3">Username</h4>
            </div>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              required
              className=" border-2 border-gray-200 w-full p-2 rounded-lg focus:border-[#7be68d] focus:border-2 focus:outline-0 placeholder:text-sm"
              placeholder="username"
            />
          </div>
          <div className="input mb-5">
            <div className="text">
              <h4 className=" font-bold mb-3">Password</h4>
            </div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              className=" border-2 border-gray-200 w-full p-2 rounded-lg focus:border-[#7be68d] focus:border-2 focus:outline-0 placeholder:text-sm"
              placeholder="password"
            />
          </div>
          <div className="input mb-5">
            <div className="text">
              <h4 className=" font-bold mb-3">Phone</h4>
            </div>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              className=" border-2 border-gray-200 w-full p-2 rounded-lg focus:border-[#7be68d] focus:border-2 focus:outline-0 placeholder:text-sm"
              placeholder="phone-number"
            />
          </div>
          <div className="input mb-5">
            <div className="text">
              <h4 className=" font-bold mb-3">Location</h4>
            </div>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              className=" border-2 border-gray-200 w-full p-2 rounded-lg focus:border-[#7be68d] focus:border-2 focus:outline-0 placeholder:text-sm"
              placeholder="location"
            />
          </div>
          <div className="input mb-5">
            <div className="text">
              <h4 className=" font-bold mb-3">Farm_size</h4>
            </div>
            <input
              type="number"
              name="farm_size"
              onChange={handleChange}
              className=" border-2 border-gray-200 w-full p-2 rounded-lg focus:border-[#7be68d] focus:border-2 focus:outline-0 placeholder:text-sm"
              placeholder="Farm Size (hectares)"
            />
          </div>

          <div className="button">
            <button className="bg-[#11D432] w-full rounded-lg p-3 font-bold shadow-lg" type="submit" disabled={loading}>
              {loading ? "Creating account..." : "Register"}
            </button>
          </div>

          <div className="account text-center mt-3">
            <p className=" text-sm">
              Already Have an Account?{" "}
              <Link to="/login" className=" text-[#11D432]">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

export default Form;
