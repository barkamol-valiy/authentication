const bcrypt = require("bcrypt");
const db = require("../config/db");

class Admin {
  static async createAdmin(email, password, username) {
    const hashedPassword = await bcrypt.hash(password, 10); // - Hash the password
    const query = `INSERT INTO admin (email, password, username)
        VALUES ( $1, $2, $3)`; // - SQL query
    try {
      const res = await db.pool.query(query, [email, hashedPassword, username]); // - Execute the query
      return res.rows[0]; // - Return the result
    } catch (error) {
      console.error("Error creating admin:", error); // - Log the error
      throw error; // - Throw an error
    }
  }

  static async getAdminByEmail(email) {
    const query = `SELECT * FROM admin WHERE email = $1`;
    try {
      const res = await db.pool.query(query, [email]); // - Execute the query
      return res.rows[0]; // - Return the result
    } catch (error) {
      console.error("Error getting admin by email:", error); // - Log the error
      throw error; // - Throw an error
    }
  }

  static async checkPassword(password, hashed) {
    return await bcrypt.compare(password, hashed); // - Compare the password with the hashed password
  }
}

module.exports = Admin;
