const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const app = express();

require("./config/passport");

// ── CORS must come FIRST (before express.json) ──
// This handles preflight OPTIONS requests for PUT/POST from Vercel
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://digital-marketing-inky-phi.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

// ── Session ──
app.use(session({
  secret: process.env.SESSION_SECRET || "Dhruv_DigitalMarketing_2026_SecretKey_9X7P4M2K8L",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// ── Routes ──
const authRoutes      = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const campaignRoutes  = require("./routes/campaignRoutes");
const leadRoutes      = require("./routes/leadRoutes");
const audienceRoutes  = require("./routes/audienceRoutes");
const reportsRoutes   = require("./routes/reportsRoutes");
const adminRoutes     = require("./routes/adminRoutes");

app.use("/api/auth",      authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/leads",     leadRoutes);
app.use("/api/audiences", audienceRoutes);
app.use("/api/reports",   reportsRoutes);
app.use("/api/admin",     adminRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

module.exports = app;
