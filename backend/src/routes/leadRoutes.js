const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

const {
  getLeads,
  createLead
} = require("../controllers/leadController");

router.get("/", authMiddleware, getLeads);

router.post("/", authMiddleware, createLead);

module.exports = router;