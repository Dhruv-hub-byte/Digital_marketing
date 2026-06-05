const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const campaignRoutes = require("./routes/campaign");

app.use("/api", campaignRoutes);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});