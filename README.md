# Professional Portfolio Website - Majid Iqbal

A high-performance, modern, and professional portfolio website. This version is optimized for speed and simplicity, with all content managed directly on the frontend and a lightweight Node.js/MongoDB backend dedicated solely to handling the "Contact Us" form.

![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Type](https://img.shields.io/badge/Architecture-Frontend%20Focused-blue)
![Database](https://img.shields.io/badge/Database-MongoDB-green)

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Deployment on Vercel](#-deployment-on-vercel)
- [Running Locally](#-running-locally)

## 🌟 Project Overview
This portfolio is built to be extremely lightweight and fast. By moving static content (projects, skills, testimonials) into a dedicated frontend data file, we eliminate unnecessary API calls and database complexity while keeping the site fully functional and professional.

### Core Sections
1.  **Home**: Modern hero section with professional initials.
2.  **About**: Comprehensive summary and key experience metrics.
3.  **Skills**: Categorized skills (UI/UX, Frontend, Backend, etc.).
4.  **Services**: Overview of professional offerings.
5.  **Portfolio**: Smooth project grid with detailed modal views.
6.  **Testimonials**: Client feedback with star ratings.
7.  **Contact**: Fully functional AJAX contact form.

## 🚀 Key Features
- **Frontend Data Management**: Content is managed in `frontend/js/data.js` for instant loading and easy updates.
- **Lightweight Backend**: Minimalist Node.js server for processing contact form submissions.
- **MongoDB Integration**: Cloud-ready database with MongoDB Atlas support.
- **Vercel Ready**: Configured for seamless deployment on Vercel.
- **Responsive & Premium UI**: Hand-crafted CSS with smooth animations and transitions.
- **Performance Optimized**: Zero dependency frontend (Vanilla JS) for maximum speed.

## 🛠 Tech Stack
- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+).
- **Backend**: Node.js, Express.
- **Database**: MongoDB (Atlas).
- **Icons**: Font Awesome 6.
- **Hosting**: Vercel.

## 📂 Project Structure
```text
Portfolio-Website/
├── frontend/               # Website files
│   ├── css/                # Stylesheets
│   ├── js/                 # Logic & Data
│   │   ├── data.js         # STATIC CONTENT (Edit this)
│   │   └── main.js         # App logic
│   ├── index.html          # Main page
│   └── vercel.json         # Vercel config
├── backend/                # Server-side logic
│   ├── api/                # Vercel serverless functions
│   │   └── index.js        # API entry point
│   ├── src/                # Source code
│   │   ├── config/         # Database & email config
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API endpoints
│   │   └── server.js       # Entry point
│   └── vercel.json         # Vercel config
└── README.md
```

## 📦 Prerequisites
- **Node.js** (v18+)
- **MongoDB Atlas** account (free tier available)

## 📥 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Compiler168/majid-portfolio1.git
    cd majid-portfolio1
    ```

2.  **Navigate to Backend**
    ```bash
    cd backend
    npm install
    ```

3.  **Configure Environment**
    Create a `.env` file in the backend folder:
    ```env
    MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
    JWT_SECRET=your_secret_key
    PORT=5000
    NODE_ENV=development
    ```

## 🚀 Deployment on Vercel

### Frontend Deployment
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set **Root Directory** to `frontend`
4. Deploy!

### Backend Deployment
1. Create another project on Vercel
2. Import the same repository
3. Set **Root Directory** to `backend`
4. Add environment variables:
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `JWT_SECRET` - A secure secret key
   - `NODE_ENV` - `production`
5. Deploy!

## 🏃 Running Locally

1.  **Start Backend**
    ```bash
    cd backend
    npm run dev
    ```
    *Server runs on `http://localhost:5000`*

2.  **Open Frontend**
    Simply open `frontend/index.html` in your browser, or serve it using a local server (e.g., Live Server extension in VS Code).

---
© 2026 Majid Iqbal. Professional, Clean, and Production-Ready.
