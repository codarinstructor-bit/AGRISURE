import React from "react";
import register from "../../assets/images/register-img.png";
import "../../assets/fonts/fonts.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <section className="login">
        <div className="bg-white shadow-2xl pb-5">
          <Link to="/">
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
                <form action="">
                  <div className="input mb-5">
                    <div className="text">
                      <h4 className=" font-bold mb-3">Username</h4>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
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
                      name=""
                      id=""
                      className=" border-2 border-gray-200 w-full p-2 rounded-lg focus:border-[#7be68d] focus:border-2 focus:outline-0 placeholder:text-sm"
                      placeholder="password"
                    />
                  </div>
                  <div className="button">
                    <button className="bg-[#11D432] w-full rounded-lg p-3 font-bold shadow-lg">
                      Login
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
