import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <header class=" flex justify-center items-center fixed top-0 right-0 left-0 w-full zindex px-4 lg:px-14 xl:px-20 py-3 bg-white shadow-xl">
      <a href="./index.html">
        <div class="logo flex items-center gap-3">
          <div class=" flex items-center flex-col">
            <img src={logo} alt="fredvic-logo" class=" w-14" />
          </div>
          <div class="text">
            <h1 class=" font-heading-font text-lg font-bold md:text-2xl lg:text-xl xl:text-2xl text-black">
              AgriSure
            </h1>
          </div>
        </div>
      </a>
      <nav class=" flex-1">
        <input type="checkbox" name="burger" id="burger" />
        <ul class=" lg:flex lg:bg-transparent lg:gap-10 lg:items-center lg:justify-center fixed zindex top-0 lg:static w-0 lg:w-full lg:h-full h-full pt-10 lg:pt-0 right-0 transition-all">
          <a href="" class=" lg:hidden flex gap-5 items-center">
            <div class="logo flex items-center justify-between">
              <img src={logo} alt="fredvic-logo" class=" w-14" />
              <div class="text">
                <h1 class=" font-heading-font text-lg font-bold md:text-xs lg:text-sm xl:text-2xl text-black">
                  AgriSure
                </h1>
              </div>
            </div>
            <span class=" text-3xl cursor-pointer lg:hidden top-4 mr-10 block right-0">
              <label for="burger">
                <IoMdCloseCircle />
              </label>
            </span>
          </a>
          <li class=" font-regular-font text-mainColour font-bold text-lg lg:text-sm xl:text-lg relative mb-5 mt-5 lg:mt-0 lg:mb-0">
            <a
              href="./index.html"
              class=" hover:before:w-0 lg:hover:before:w-full"
            >
              Features
            </a>
          </li>
          <li class="font-regular-font text-black font-medium text-lg lg:text-sm xl:text-lg relative mb-5 lg:mb-0">
            <button
              id="dropdownDefaultButton1"
              data-dropdown-toggle="dropdown1"
              class=" inline-flex items-center"
              type="button"
            >
              <a
                href="./products.html"
                class=" hover:before:w-0 lg:hover:before:w-full"
              >
                How it Works
              </a>
            </button>
          </li>
          <li class="font-regular-font text-black font-medium text-lg lg:text-sm xl:text-lg relative mb-5 lg:mb-0">
            <a
              href="./about.html"
              class=" hover:before:w-0 lg:hover:before:w-full"
            >
              Solutions
            </a>
          </li>
          <li class="font-regular-font text-black font-medium text-lg lg:text-sm xl:text-lg relative mb-5 lg:mb-0">
            <a
              href="./contact.html"
              class=" hover:before:w-0 lg:hover:before:w-full"
            >
              Pricing
            </a>
          </li>
          <div class="button lg:hidden mt-5">
            <a href="./contact.html">
              <button class=" rounded-lg px-3 py-3 font-semibold text-white bg-[#11D432] border-2 w-full 0 font-regular-font">
                Get Started
              </button>
            </a>
          </div>
        </ul>
      </nav>
      <div class="other flex items-center gap-5">
        <Link to="/login">Login</Link>
        <div class="button hidden md:block">
          <a href="./contact.html">
            <button class="bg-[#11D432] rounded-xl px-5 py-2 font-semibold text-white border-2 font-regular-font">
              Get Started
            </button>
          </a>
        </div>
        <span class=" text-black text-xl cursor-pointer lg:hidden">
          <label for="burger">
            <FaBarsStaggered />
          </label>
        </span>
      </div>
    </header>
  );
}

export default Navbar;
