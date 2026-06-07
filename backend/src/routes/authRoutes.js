const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  registerUser,
  loginUser,
  getMe,
  updateUserProfile
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

// Get current logged-in user's profile (pre-populate settings form)
router.get("/me", authMiddleware, getMe);

// Update current logged-in user's profile (admin & regular user both use this)
router.put("/profile", authMiddleware, updateUserProfile);

router.get("/test", (req, res) => {
  res.send("Auth Route Working");
});

router.get(
  "/linkedin",
  passport.authenticate("linkedin")
);

router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", { failureRedirect: "/login" }),
  (req, res) => {
    const frontendURL = process.env.FRONTEND_URL || "http://localhost:5173";
    res.redirect(`${frontendURL}/dashboard`);
  }
);

module.exports = router;