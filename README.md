# 🛒 Product Store

A full-stack **MERN** (MongoDB, Express, React, Node.js) application for managing products, built with **Vite** and **Material UI**.

---

## ✨ Features

- ✅ Add, update, and delete products
- ✅ Responsive UI with **Material UI**
- ✅ Light/Dark mode toggle
- ✅ State management with **Zustand**
- ✅ RESTful API built with **Express** & **MongoDB**

---

## 📂 Folder Structure

product-store/
├── client/ # React frontend (Vite)
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Pages (Home, Create)
│ │ ├── store/ # Zustand state management
│ │ ├── App.jsx
│ │ ├── main.jsx
│ ├── index.html
│ └── ...
├── server/ # Express backend
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── controllers/ # Request handlers
│ ├── server.js # Entry point
│ └── .env
└── README.md


---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm
- MongoDB (local or [Atlas](https://www.mongodb.com/atlas))

---

###

🔗 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Create a new product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product

📦 Main Packages Used in Frontend

react/react-router-dom

@mui/material UI 

zustand

in Backend

express

mongoose

mongodb(atlas)

