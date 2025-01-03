const express = require("express");
const AdminRoute = express.Router();
const adminAuth = require("../../controllers/admin/authController");
const authMiddleware = require("../../middleware/admin/authMiddle");

AdminRoute.post("/signup", adminAuth.signup);

AdminRoute.post("/login", adminAuth.login);

AdminRoute.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: "welcome", admin: req.admin });
});

module.exports = AdminRoute;
