const express = require("express");
const cors = require("cors");

const app = express();
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const leadRoutes = require("./routes/leadRoutes");
const audienceRoutes = require("./routes/audienceRoutes");
const reportsRoutes = require("./routes/reportsRoutes");
const adminRoutes = require("./routes/adminRoutes");
const session = require("express-session");

const passport = require("passport");

require("./config/passport");

app.use(cors());
app.use(express.json());

app.use(session({
  secret:
  "secret-key",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/audiences", audienceRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

module.exports = app;

