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

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=<your-db-username>
DB_PASSWORD=<your-db-password>
DB_NAME=<your-db-name>
JWT_SECRET=<your-secret-key>
```

4. **Start the Application**

- In development mode:

```bash
npm run dev
```

- In production mode:

```bash
npm start
```

---

## Project Structure

```
├── server.js          # Entry point of the application
├── controllers        # Contains all route controllers
├── models             # Database models
├── routes             # API route definitions
├── middleware         # Custom middleware (e.g., authentication, error handling)
├── utils              # Utility functions (e.g., token handling)
└── .env               # Environment variables
```

---

## Dependencies

- **bcrypt**: Password hashing
- **cookie-parser**: Parse HTTP cookies
- **dotenv**: Environment variable management
- **express**: Web framework
- **jsonwebtoken**: JWT token creation and verification
- **pg**: PostgreSQL client for Node.js
- **nodemon** (dev): Development tool for auto-restarting the server

---

## API Endpoints

### **User Authentication**

1. **Register**  
   **POST** `/api/auth/register`  
   Body:

   ```json
   {
     "name": "John Doe",
     "email": "johndoe@example.com",
     "password": "password123"
   }
   ```

2. **Login**  
   **POST** `/api/auth/login`  
   Body:

   ```json
   {
     "email": "johndoe@example.com",
     "password": "password123"
   }
   ```

3. **Logout**  
   **POST** `/api/auth/logout`

### **Protected Routes**

All protected routes require a valid JWT token in the `Authorization` header.

Example: `Authorization: Bearer <token>`

---

## Security Best Practices

1. **Store JWT Secrets Securely**: Keep `JWT_SECRET` confidential.
2. **Use HTTPS**: Ensure the application runs over HTTPS in production.
3. **Sanitize Inputs**: Prevent SQL injection and other vulnerabilities.
4. **Hash Passwords**: Use bcrypt for password hashing.

---

## Future Improvements

- Add rate limiting to prevent brute-force attacks.
- Enhance role-based access control for more granular permissions.
- Implement email verification for user registration.

---

## License

This project is licensed under the ISC License.

---

## Contributing

Feel free to submit issues or pull requests to improve this project.

---

## Contact

For any inquiries or issues, please contact the author at `barkamol.valiy@gmail.com`.
