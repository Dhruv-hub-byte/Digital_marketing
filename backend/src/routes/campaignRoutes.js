const express = require("express");
const router = express.Router();
const authMiddleware =
require("../middleware/authMiddleware");

const {
  getCampaigns,
  createCampaign,
  updateCampaign,
  deleteCampaign
} = require("../controllers/campaignController");

router.get("/", authMiddleware, getCampaigns);
router.post("/", authMiddleware, createCampaign);
router.put("/:id", authMiddleware, updateCampaign);
router.delete("/:id", authMiddleware, deleteCampaign);

module.exports = router;