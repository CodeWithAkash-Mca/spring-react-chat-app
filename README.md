# Chat Application

This project is a full-stack chat application consisting of a backend and a frontend. The backend is built using Java with Spring Boot, and the frontend is developed using React with Vite. The application allows users to create chat rooms and exchange messages in real-time.

## Table of Contents

1. [Backend](#backend)
   - [Technologies Used](#technologies-used)
   - [Setup Instructions](#setup-instructions)
   - [Folder Structure](#folder-structure)
   - [API Endpoints](#api-endpoints)
2. [Frontend](#frontend)
   - [Technologies Used](#technologies-used-1)
   - [Setup Instructions](#setup-instructions-1)
   - [Folder Structure](#folder-structure-1)
3. [Running the Application](#running-the-application)

---

## Backend

The backend is a Spring Boot application that provides REST APIs for managing chat rooms and messages. It also includes WebSocket support for real-time communication.

### Technologies Used

- Java
- Spring Boot
- WebSocket
- Maven

### Setup Instructions

1. Navigate to the backend directory:
   ```bash
   cd chat-app-backend
   ```
2. Build the project using Maven:
   ```bash
   ./mvnw clean install
   ```
3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
4. The backend will be available at `http://localhost:8080`.

### Folder Structure

```
chat-app-backend/
├── src/
│   ├── main/
│   │   ├── java/com/substring/chat/
│   │   │   ├── ChatAppBackendApplication.java
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── entities/
│   │   │   ├── payload/
│   │   │   └── repositories/
│   │   ├── resources/
│   │       ├── application.properties
│   │       ├── static/
│   │       └── templates/
│   └── test/
│       └── java/com/substring/chat/
│           └── ChatAppBackendApplicationTests.java
```

### API Endpoints

#### Room Controller
- `GET /rooms` - Get all chat rooms
- `POST /rooms` - Create a new chat room

#### Chat Controller
- `POST /messages` - Send a message
- `GET /messages/{roomId}` - Get messages for a specific room

---

## Frontend

The frontend is a React application bootstrapped with Vite. It provides a user-friendly interface for interacting with the chat application.

### Technologies Used

- React
- Vite
- Tailwind CSS
- Axios

### Setup Instructions

1. Navigate to the frontend directory:
   ```bash
   cd chat-app-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The frontend will be available at `http://localhost:5173`.

### Folder Structure

```
chat-app-frontend/
├── src/
│   ├── components/
│   │   ├── ChatPage.jsx
│   │   └── JoinCreateChat.jsx
│   ├── config/
│   │   ├── AxiosHelper.js
│   │   └── helper.js
│   ├── context/
│   │   └── ChatContext.jsx
│   ├── services/
│   │   └── RoomService.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── vite.config.js
└── tailwind.config.js
```

---

## Running the Application

1. Start the backend server by following the [backend setup instructions](#setup-instructions).
2. Start the frontend development server by following the [frontend setup instructions](#setup-instructions-1).
3. Open your browser and navigate to `http://localhost:5173`.
4. You can now create chat rooms and exchange messages in real-time.

---

Enjoy using the Chat Application!