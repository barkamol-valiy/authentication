# Authentication and Authorization Project

## Overview

This project implements a secure backend system for user authentication and authorization. It uses JWT for session management, bcrypt for password hashing, and PostgreSQL as the database. The application is built using Node.js and Express, with environment variables managed by `dotenv`.

---

## Features

- **User Authentication**: Register and login functionality with password hashing.
- **Session Management**: JWT-based token handling for secure user sessions.
- **Authorization**: Role-based access control (RBAC).
- **Secure Cookie Handling**: Uses `cookie-parser` for managing cookies.
- **Environment Configuration**: Centralized configuration with `.env`.

---

## Requirements

- **Node.js**: >= 14.x
- **PostgreSQL**: >= 13.x
- **npm**: >= 6.x

---

## Installation

1. **Clone the Repository**

```bash
git clone https://github.com/barkamol-valiy/authentication.git
cd auth
```

2. **Install Dependencies**

```bash
npm install
```

3. **Set Up Environment Variables Create a `.env` file in the root directory and add the following:**

```bash
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=`your-db-username`
DB_PASSWORD=`your-db-password`
DB_NAME=`your-db-name`
JWT_SECRET=`your-secret-key`
```

4. **Start the Application**

```bash
npm run dev
```

## Project Structure

```bash
├── server.js          # Entry point of the application
├── controllers        # Contains all route controllers
├── models             # Database models
├── routes             # API route definitions
├── middleware         # Custom middleware (e.g., authentication, error handling)
├── utils              # Utility functions (e.g., token handling)
└── .env               # Environment variables
```

## Dependencies

- **bcrypt**: Password hashing
- **cookie-parser**: Parse HTTP cookies
- **dotenv**: Environment variable management
- **express**: Web framework
- **jsonwebtoken**: JWT token creation and verification
- **pg**: PostgreSQL client for Node.js
- **nodemon (dev)**: Development tool for auto-restarting the server

## API Endpoints

1.  **Register**
    POST `/api/auth/register`
    Body:
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
2.  **Login**
    POST `/api/auth/login`
    Body:
    ```json
    {
      "email": "johndoe@example.com",
      "password": "password123"
    }
    ```
