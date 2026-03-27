import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { agrisureApi } from "../../Api/agrisureApi";

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
    setSuccess("");

    try {
      const payload = {
        username: formData.username,
        password: formData.password,
        phone: formData.phone,
        location: formData.location,
        farm_size: formData.farm_size ? Number(formData.farm_size) : null,
      };

      const response = await agrisureApi.register(payload);

      setSuccess(response.message || "User created successfully");

      // Clear form after success
      setFormData({
        username: "",
        password: "",
        phone: "",
        location: "",
        farm_size: "",
      });

      // Optional:
      navigate("/login");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="form-container">
        <form action="" onSubmit={handleSubmit}>
        {success && (
          <p className="mb-4 text-sm text-green-700 bg-green-100 px-4 py-2 rounded-lg">
            {success}
          </p>
        )}

        {error && (
          <p className="mb-4 text-sm text-red-700 bg-red-100 px-4 py-2 rounded-lg">
            {error}
          </p>
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
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3 rounded-full bg-[#0b5e20] text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Processing...
                </span>
              ) : (
                "Register"
              )}
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
