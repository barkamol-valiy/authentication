const express = require("express");
const dotenv = require("dotenv");
const portfinder = require("portfinder");
const main = require("./routes/main/mainroutes");
const db = require("./models/config/db");

const app = express();
dotenv.config();
app.use(express.json()); // for parsing application/json

portfinder.basePort = process.env.PORT || 3000;

db.connect();

app.use("/", main);

portfinder.getPort((err, port) => {
  if (err) {
    console.error("Error finding available port:", err);
    return;
  }
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
