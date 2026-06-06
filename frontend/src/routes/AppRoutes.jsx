import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Campaigns from "../pages/Campaigns";
import Audience from "../pages/Audience";
import Leads from "../pages/Leads";
import Reports from "../pages/Reports";
import Settings from "../pages/Setting";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CampaignManagement from "../pages/admin/CampaignManagment";
import Signup from "../pages/Signup";
import Users from "../pages/admin/Users";
import LeadsManagement from "../pages/admin/LeadsManagment";
import ReportsManagement from "../pages/admin/ReportsManagment";
import AdminSettings from "../pages/admin/Settings";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/audience" element={<Audience />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin/users"
          element={<Users />}
        />

        <Route
          path="/admin/campaigns"
          element={<CampaignManagement />}
        />

        <Route
          path="/admin/leads"
          element={<LeadsManagement />}
        />

        <Route
          path="/admin/reports"
          element={<ReportsManagement />}
        />

        <Route
          path="/admin/settings"
          element={<AdminSettings />}
        />
      </Routes>
    </BrowserRouter>
  );
}