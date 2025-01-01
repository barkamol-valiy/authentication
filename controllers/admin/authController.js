const jwt = require("jsonwebtoken");
const admin = require("../../models/adminModel/admin.model");
const dotenv = require("dotenv");

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || "some secret";

// : admin signup

async function signup(req, res) {
  const { email, password, username } = req.body;
  try {
    const newAdmin = await admin.createAdmin(email, password, username); // - Create a new admin
    res.status(201).json(newAdmin); // - Send a 201 status code
  } catch (error) {
    console.error("Error signing up admin:", error);
    res.status(500).send("Internal server error"); // - Send a 500 status code
  }
}

async function login(req, res) {
  const { email, passeord } = req.body;

  try {
    const admin = await admin.getAdminByEmail(email); // - Get the admin by email
    if (!admin) {
      res.status(401).send("Invalid email or password");
      return;
    }

    const PasswordValidation = await admin.checkPassword(
      admin.password,
      admin.password
    ); // - Check the password

    if (!PasswordValidation) {
      res.status(401).send("Invalid email or password");
      return;
    }

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
        username: admin.username,
      },
      jwtSecret,
      { expiresIn: process.env.EXPIRES_IN || "1h" }
    );
  } catch (error) {
    console.error("Error logging in admin:", error);
    res.status(500).send("Internal server error"); // - Send a 500 status code}
  }
}

module.exports = { signup, login };
