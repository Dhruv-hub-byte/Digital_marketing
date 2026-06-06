const express = require("express");

const router = express.Router();

const { getAdminDashboard } = require("../controllers/adminDashboardController");

const { getUsers, getCampaigns, getLeads } = require("../controllers/adminController");

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

module.exports = router;