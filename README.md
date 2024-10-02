# Authentication Service

This repository handles the **authentication** for users, including **Signup** and **Login** functionalities. It uses **Node.js**, **Express.js**, **MongoDB**, and **JWT (JSON Web Tokens)** for secure token-based authentication.

## Features

- **Signup**: Allows new users to register with unique email addresses and securely hashed passwords.
- **Login**: Authenticates existing users and returns a JWT for access to protected routes.
- Passwords are hashed using **bcrypt** for added security.
- **JWT-based Authentication**: Secures routes and resources using tokens, enabling stateless session handling.

## Technologies Used

- **Node.js**: Backend framework.
- **Express.js**: Web framework for handling routes.
- **MongoDB**: Database for storing user details.
- **Mongoose**: ODM for MongoDB to interact with the database.
- **JWT (Json Web Tokens)**: For secure token-based authentication.
- **bcrypt**: For hashing user passwords.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rajput-vinay/Authentication_Service.git 
   2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables by creating a `.env` file in the root directory:
    ```bash
    PORT = 3000
    DATABASE_URL =
    JWT_SECRET = 
    ```

4. Start the server:
    ```bash
    npm run start
    ```


## License
This project is licensed under the MIT License.
