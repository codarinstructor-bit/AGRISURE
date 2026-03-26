import React from "react";
import Form from "../../Components/Form/Form";
import register from "../../assets/images/register-img.png";
import "../../assets/fonts/fonts.css";
import "./Register.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <section className="register">
        <div className="bg-white shadow-2xl pb-5">
          <Link to="/">
            <div className="logo flex gap-3 items-center p-3">
              <img src={Logo} alt="" />
              <h1 className=" font-extrabold text-2xl">AgriSure</h1>
            </div>
          </Link>
          <div className=" grid grid-cols-12 grid-container">
            <div className="col-span-12 md:col-span-6">
              <div className="form-1 p-7">
                <div className="heading text-center mb-5">
                  <h1 className=" font-extrabold text-3xl pb-3">
                    Create your Agrisure account
                  </h1>
                  <p className=" text-sm">
                    Join today and start farming smarter with Agrisure.
                  </p>
                </div>
                <Form />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 hidden md:block">
              <div className="form-2 bg-[#7be68d] p-7 py-24 rounded-xl shadow-2xl">
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

export default Register;
