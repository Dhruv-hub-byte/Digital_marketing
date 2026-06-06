const express = require("express");
const router = express.Router();

const {
  getAudiences,
  createAudience,
  updateAudience,
  deleteAudience
} = require("../controllers/audienceController");

router.get("/", getAudiences);
router.post("/", createAudience);
router.put("/:id", updateAudience);
router.delete("/:id", deleteAudience);

module.exports = router;