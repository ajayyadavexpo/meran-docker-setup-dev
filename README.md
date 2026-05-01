# MERN Stack with Docker

This project demonstrates how to run a complete **MERN Stack application (MongoDB, Express, React, Node.js)** using Docker and Docker Compose.

No need to install MongoDB or Node.js locally — everything runs inside containers.

---

## 📌 Features

* ⚛️ React Frontend (Vite)
* 🟢 Express Backend (Node.js)
* 🍃 MongoDB Database
* 🐳 Dockerized Setup
* 🔁 Hot Reloading (Frontend)
* 🔗 API Integration (React → Express → MongoDB)

---

## 🧱 Project Structure

```
mern-docker-app/
│
├── client/        # React Frontend
├── server/        # Express Backend
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Tech Stack

* React (Frontend)
* Node.js + Express (Backend)
* MongoDB (Database)
* Docker & Docker Compose

---

## 🐳 Docker Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ajayyadavexpo/meran-docker-setup-dev.git
cd meran-docker-setup-dev
```

---

### 2️⃣ Run the Project

```bash
docker-compose up --build
```

---

### 3️⃣ Access the App

* Frontend → [http://localhost:3000](http://localhost:3000)
* Backend API → [http://localhost:5000](http://localhost:5000)
* MongoDB → Port 27017

---

## 🔄 How It Works

1. React frontend sends API request
2. Express backend receives request
3. Backend fetches data from MongoDB
4. Response is sent back to React
5. Data is displayed in UI

---

## ⚠️ Important Note

Inside Docker, services communicate using **service names**, not `localhost`.

❌ Wrong:

```
mongodb://localhost:27017/mydb
```

✅ Correct:

```
mongodb://mongo:27017/mydb
```

---

## 📂 Docker Services

* **client** → React App
* **server** → Express API
* **mongo** → MongoDB Database

---

## 🔁 Hot Reloading

Hot reloading is enabled using:

* Volume mounting
* Polling environment variables

So any code change reflects instantly without restarting containers.

---

## 🧪 API Example

```
GET /api/users
```

Returns list of users from MongoDB.

---

## 💡 Future Improvements

* 🔐 Add JWT Authentication
* 🌐 Add Nginx for production
* 📦 Environment variables support
* 🚀 Deploy on VPS / Cloud

---

## 🤝 Contributing

Feel free to fork this repository and improve it.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## ⭐ Support

If you found this helpful, give it a ⭐ on GitHub and share it with others!

---

