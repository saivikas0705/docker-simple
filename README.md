# 🐳 Docker Simple Notes App

A full-stack Notes Web Application built using **React, Node.js, MongoDB, and Docker**.  
This project demonstrates multi-container architecture using Docker Compose.

---

## 🚀 Tech Stack

- Frontend: React
- Backend: Node.js + Express
- Database: MongoDB
- Containerization: Docker & Docker Compose

---

## 🏗 Architecture

React (Frontend)  
⬇  
Node.js (Backend API)  
⬇  
MongoDB (Database)

Each service runs inside its own Docker container.

---

## 📁 Project Structure

docker/
│
├── backend/
│ ├── Dockerfile
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── Dockerfile
│ ├── src/
│ └── package.json
│
├── docker-compose.yml
└── README.md

---

## 🐳 How to Run the Project

Make sure Docker Desktop is installed and running.

### 🔹 Build & Start

```bash
docker compose up --build
Access the App

Frontend:

http://localhost:3001


Backend:

http://localhost:5000


MongoDB:

Port 27017

Stop the App
docker compose down
