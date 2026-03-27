import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";

function DashboardLayout() {
  return (
    <div className=" flex flex-col lg:flex-row h-full bg-[#f4f5f1]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-7.5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
