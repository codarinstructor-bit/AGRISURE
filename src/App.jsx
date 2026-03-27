import DashboardLayout from "./Layouts/DashboardLayout";
import MainLayout from "./Layouts/MainLayout";
import FarmerDashboard from "./Pages/Farmers-Dashboard/FarmerDashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Overview from "./Pages/Overview/Overview";
import Register from "./Pages/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RiskAssessment from "./Pages/RiskAssessment";
import Lending from "./Pages/Lending";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import LoanRequest from "./Pages/LoanRequest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="loan-request" element={<LoanRequest />} />
            <Route path="risk-assessment" element={<RiskAssessment />} />
            <Route path="lending" element={<Lending />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
