import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Campaigns from "../pages/Campaigns";
import Audience from "../pages/audience";
import Leads from "../pages/Leads";
import Reports from "../pages/Reports";
import Settings from "../pages/setting";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/audience" element={<Audience />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}