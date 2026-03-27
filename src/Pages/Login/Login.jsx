import React from "react";
import register from "../../assets/images/register-img.png";
import "../../assets/fonts/fonts.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { agriSureApi } from "../../Api/AgrisureApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Handle login submit
  console.log("API:", agriSureApi);
  console.log("LOGIN TYPE:", typeof agriSureApi.login);
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const payload = {
        username: formData.username,
        password: formData.password,
      };

      await agriSureApi.login(payload);

      setMessage("Login successful");

      // Redirect to dashboard or loan page
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="login">
        <div className="bg-white shadow-2xl pb-5">
          <Link to="/AGRISURE">
            <div className="logo flex gap-3 items-center p-3">
              <img src={Logo} alt="" />
              <h1 className=" font-extrabold text-2xl">AgriSure</h1>
            </div>
          </Link>
          <div className=" grid grid-cols-12 grid-container">
            <div className="col-span-12 md:col-span-6 self-center">
              <div className="form-1 p-7">
                <div className="heading text-center mb-5">
                  <h1 className=" font-extrabold text-3xl pb-3">
                    Welcome Back
                  </h1>
                  <p className=" text-sm">
                    Enter your details to access your account
                  </p>
                </div>
                {message && (
                  <p className="bg-green-100 text-green-700 px-4 py-2 rounded-lg mb-3 text-sm">
                    {message}
                  </p>
                )}

                {error && (
                  <p className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mb-3 text-sm">
                    {error}
                  </p>
                )}

                <form action="" onSubmit={handleLogin}>
                  <div className="input mb-5">
                    <div className="text">
                      <h4 className=" font-bold mb-3">Username</h4>
                    </div>
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
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
                      className=" border-2 border-gray-200 w-full p-2 rounded-lg focus:border-[#7be68d] focus:border-2 focus:outline-0 placeholder:text-sm"
                      placeholder="password"
                    />
                  </div>
                  <div className="button">
                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-2 w-full py-3 rounded-lg bg-[#0a7f3f] text-white text-[16px] font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Logging in...
                        </span>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>

                  <div className="account text-center mt-3">
                    <p className=" text-sm">
                      Don't Have an Account?{" "}
                      <Link to="/register" className=" text-[#11D432]">
                        Register Now
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 hidden md:block">
              <div className="form-2 bg-[#7be68d] p-7 py-20 rounded-xl shadow-2xl">
                <div className="heading">
                  <h1 className=" font-extrabold text-2xl form-heading">
                    Manage farm activities, track crop performance, and make
                    better agricultural decisions.
                  </h1>
                </div>
                <div className="image mx-auto mt-10">
                  <img
                    src={register}
                    alt="Register Image"
                    className=" w-96 block mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
