# ShoppyGlobe Backend

**An E-commerce backend API built with Node.js, Express, and MongoDB.**

---

## Overview

This project is the backend for the ShoppyGlobe e-commerce app. It handles product data, user authentication, and cart management with full CRUD operations and JWT-based security.

---

## Features

- RESTful API endpoints for Products and Cart
- User registration and login with JWT authentication
- Protected routes for managing the shopping cart
- MongoDB integration for storing products, users, and cart items
- Input validation and error handling for robust API responses

---

## Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- Thunder Client for API testing

---

## API Endpoints

| Method | Endpoint         | Description                       |
|--------|------------------|---------------------------------|
| GET    | `/products`      | Get all products                 |
| GET    | `/products/:id`  | Get a single product by ID       |
| POST   | `/cart`          | Add product to cart (auth required) |
| PUT    | `/cart/:id`      | Update cart item quantity (auth required) |
| DELETE | `/cart/:id`      | Remove product from cart (auth required) |
| POST   | `/register`      | Register new user                |
| POST   | `/login`         | User login, returns JWT          |

---

## Setup Instructions

git clone https://github.com/Jaswithadabbiru/shoppyglobe-backend.git

npm install

Create a .env file with your MongoDB URI and JWT secret:

npm run dev

Use Thunder Client or Postman to test all API endpoints.

API testing screenshots are available in the /screenshots folder.

## Notes
Make sure MongoDB is running locally or use a cloud MongoDB instance.

Protect your .env file and never push it to public repos.

## Author
Jaswitha Dabbiru
Email: jaswitha.dabbiru@gmail.com
GitHub: https://github.com/Jaswithadabbiru
