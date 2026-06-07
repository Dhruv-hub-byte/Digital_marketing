const express = require("express");

const router = express.Router();

const { getAdminDashboard } = require("../controllers/adminDashboardController");

const { getUsers, getCampaigns, getLeads } = require("../controllers/adminController");

const { updateProfile } = require("../controllers/settingsController");

const authMiddleware = require("../middleware/authMiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");

router.get(
  "/dashboard",
  authMiddleware,
  adminMiddleware,
  getAdminDashboard
);

router.get(
  "/users",
  authMiddleware,
  adminMiddleware,
  getUsers
);

router.get(
  "/campaigns",
  authMiddleware,
  adminMiddleware,
  getCampaigns
);

router.get(
  "/leads",
  authMiddleware,
  adminMiddleware,
  getLeads
);

router.put(
  "/settings",
  authMiddleware,
  adminMiddleware,
  updateProfile
);

module.exports = router;