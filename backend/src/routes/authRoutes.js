const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  registerUser,
  loginUser
} = require("../controllers/authController");

router.post(
  "/register",
  registerUser
);

router.post("/login", loginUser);

router.get("/test", (req, res) => {
  res.send("Auth Route Working");
});

router.get(
  "/linkedin",
  passport.authenticate(
    "linkedin"
  )
);

router.get(
  "/linkedin/callback",

  passport.authenticate(
    "linkedin",
    {
      failureRedirect:
        "/login"
    }
  ),

  (req, res) => {

    res.redirect(
      "http://localhost:5173/dashboard"
    );

  }
);

module.exports = router;