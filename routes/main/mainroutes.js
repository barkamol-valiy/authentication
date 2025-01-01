const express = require("express");
const router = express.Router();
const db = require("../../models/config/db");

// GET /

router.get("/", async (req, res) => {
  try {
    const result = await db.getAll();
    res.json(result);
  } catch (error) {
    console.error("Error getting data:", error);
    res.status(500).send("Internal server error");
    process.exit(1);
  }
});

module.exports = router;
