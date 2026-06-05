const express = require("express");

const router = express.Router();

router.get("/campaigns", (req, res) => {
  res.json([
    {
      id: 1,
      name: "LinkedIn Campaign"
    }
  ]);
});

module.exports = router;