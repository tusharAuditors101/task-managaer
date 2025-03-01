# Explaination
Task Manager (MERN CRUD App) - Step-by-Step Guide

Overview

The Task Manager is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create, read, update, and delete (CRUD) tasks efficiently. Users can also mark tasks as completed, filter tasks, and manage their workflow.

Features

User authentication (JWT-based)

CRUD operations on tasks

Task filtering (by status, priority, etc.)

Responsive UI with React

Secure backend with Express & Node.js

MongoDB for data storage

Tech Stack

Frontend: React, React Router, Axios, Tailwind CSS

Backend: Node.js, Express.js, JWT, bcrypt

Database: MongoDB (Mongoose ORM)

Deployment: Vercel (Frontend), Render/Heroku (Backend), MongoDB Atlas

# Setup Node

```sh
npm install express mongoose dotenv cors jsonwebtoken bcryptjs nodemon
```

```sh
npm touch server.js .env routes.js models.js middleware.js 
```

# Setup Mongo DB

```sh
brew tap mongodb/brew                                                                                 
brew install mongodb-community@7.0
```

# Start Mongo Db Service

```sh
brew services start mongodb-community@7.0
```

# Enter mongo db shell

```sh
mongosh
```

# Create db user in mongo db

```sh
use admin
db.createUser({ user: "dev", pwd: "dev", roles: ["root"] })
```

# Mongo Db uri 

```sh
mongodb://localhost:27017/taskmanager
```

# Generate jwt key for your app

```sh
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

# Create frontend app

```sh
npx create-react-app frontend
```

# Install Depnedencies
```sh
npm install axios react-router-dom tailwindcss
```

# Configure Tailwind

```sh
npx tailwindcss init -p
```