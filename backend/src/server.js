require("dotenv").config({
  path: "./backend/.env"
});

console.log(
  "CLIENT ID:",
  process.env.LINKEDIN_CLIENT_ID
);

const app = require("./app");

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});