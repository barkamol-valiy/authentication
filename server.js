const express = require("express");
const dotenv = require("dotenv");
const main = require("./routes/main/mainroutes");
const portfinder = require("portfinder");

const app = express();
dotenv.config();

app.use("/", main);

portfinder.basePort = process.env.PORT || 3001; //- Start searching from this port

portfinder.getPort((err, port) => {
  if (err) {
    console.error("Error finding available port:", err);
    return;
  }
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
