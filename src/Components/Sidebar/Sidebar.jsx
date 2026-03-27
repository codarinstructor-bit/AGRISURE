import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiGrid,
  FiBriefcase,
  FiAlertTriangle,
  FiDollarSign,
  FiSettings,
} from "react-icons/fi";

function Sidebar() {
  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: <FiGrid /> },
    {
      name: "Loan Request",
      path: "/dashboard/loan-request",
      icon: <FiDollarSign />,
    },
    { name: "Portfolio", path: "/dashboard/reports", icon: <FiBriefcase /> },
    {
      name: "Risk Assessment",
      path: "/dashboard/risk-assessment",
      icon: <FiAlertTriangle />,
    },
    { name: "Lending", path: "/dashboard/lending", icon: <FiDollarSign /> },
    { name: "Settings", path: "/dashboard/settings", icon: <FiSettings /> },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#f7f8f5] border-b border-[#e3e3e3]">
        <h1 className="text-xl font-bold text-[#0b5e20]">AGRISURE</h1>
        <button onClick={() => setIsOpen(true)}>
          <FiMenu className="text-2xl" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 min-h-screen w-62.5 bg-[#f7f8f5] px-5 py-8 border-r border-[#e3e3e3] transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Close button (mobile) */}
        <div className="flex justify-between items-center mb-8 lg:hidden">
          <span className="text-2xl font-extrabold text-[#0b5e20]">
            AGRISURE
          </span>
          <button onClick={() => setIsOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>

        {/* Logo (desktop) */}
        <div className="hidden lg:block text-[30px] font-extrabold text-[#0b5e20] mb-10">
          AGRISURE
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-2.5">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3.5 rounded-[14px] font-semibold text-[15px] transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-[#0b5e20] shadow-sm"
                    : "text-[#5f6f5f] hover:bg-white/60"
                }`
              }
            >
              <span className="text-[18px]">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
