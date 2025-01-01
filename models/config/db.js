const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

class Database {
  constructor() {
    this.Pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });
  }

  async connect() {
    try {
      await this.Pool.connect();
      console.log("Connected to database");
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
  }

  async getAll() {
    try {
      const res = await this.Pool.query("SELECT * FROM users");
      return res.rows;
    } catch (error) {
      console.error("Error executing query:", error);
    }
  }
}

module.exports = new Database();
//- In this example, we've created a class called Database that connects to a PostgreSQL database using the pg package. The constructor method sets up the database connection using the environment variables defined in the .env file. The connect method establishes the connection to the database.
