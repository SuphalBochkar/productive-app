# Productive Web Application

## Introduction

The Productive Web Application is designed to boost productivity by providing essential features like **Todos** and **Messages**. These tools simplify task management and communication, helping users stay organized and connected.

Built with **HTML, CSS, JavaScript, Node.js,** and **Socket.IO**, the app is powerful, flexible, and compatible with modern web browsers and mobile devices, ensuring users can manage tasks and communicate effectively on any platform.

## Feature Overview

### 1. Todos

**Manage Tasks Efficiently**:  
- **Inputs**: Users can add tasks with a title, optional description, and due date.  
- **Processing**: Tasks are securely stored, editable, and can be marked as done or undone.  
- **Outputs**: Updated task lists are displayed in real-time.  
- **Error Handling**: Alerts for invalid inputs or database issues.

### 2. Messages

**Real-Time Communication**:  
- **Inputs**: Search for users by name or username and send messages.  
- **Processing**: Messages are delivered instantly via **Socket.IO** and stored for retrieval.  
- **Outputs**: Displays search results, sent, and received messages in the chat interface.  
- **Error Handling**: Notifications for user not found or message delivery issues.  


# Contributing and Development Guide

### Step 1: Application Credentials
Use the following credentials to log in and start using the application:

- **Username:** `user@gmail.com`
- **Password:** `123456`

### Step 2: Clone the Repository
Start by cloning the repository from GitHub to your local machine using the following command:

```bash
git clone https://github.com/SuphalBochkar/productive-app.git
```

### Step 3: Navigate to the Server and Client Directories

1. **Server Setup:**
   - Navigate to the server directory:
     ```bash
     cd productive-app/server
     ```
   - Install the necessary dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

2. **Client Setup:**
   - Open a new terminal window and navigate to the client directory:
     ```bash
     cd productive-app/client
     ```
   - Install the necessary dependencies:
     ```bash
     npm install
     ```
   - Start the frontend:
     ```bash
     npm run dev
     ```

### Step 4: Access the Application
Once both the server and client are running, open your browser and navigate to `http://localhost:5173` to access the application.

### Folder Structure Overview

The project is structured as follows:

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Contains metadata about the project and dependencies for both server and client.
- **server**: Contains backend files, including routes, models, controllers, and middleware.
  - **index.js**: Entry point for the server.
  - **.env**: Environment variables for the server.
  - **routes/**: API endpoints.
  - **models/**: Mongoose schemas.
  - **middleware/**: Custom middleware functions.
  - **controller/**: Business logic for handling requests.
- **client**: Contains frontend files, including components, pages, and hooks.
  - **src/**: Main source files for the React application.
  - **pages/**: Different views and pages in the application.
  - **components/**: Reusable components.
  - **hooks/**: Custom React hooks.

