---

# Productive Web Application

## Introduction

The Productive Web Application is designed to significantly enhance users' productivity by providing essential features like **Todos** and **Messages**. These features are thoughtfully integrated to simplify task management and communication, helping users stay organized, focused, and connected in their daily activities.

The application is developed using a robust tech stack, including **HTML, CSS, JavaScript, Node.js,** and **Socket.IO**. This combination ensures the app is both powerful and flexible, while maintaining compatibility with modern web browsers and mobile devices. This accessibility guarantees that users can manage their tasks and communicate effectively, regardless of their platform or device.

## Detailed Feature Analysis

### 1. Todos Feature

#### Introduction

The Todos feature is designed to help users efficiently manage their tasks. Whether it's adding a new task, editing an existing one, or simply marking tasks as complete, this feature offers a comprehensive solution for task management.

#### Inputs

- **Title:** The primary identifier for each task, where users input a brief summary of what needs to be done.
- **Description:** An optional field where users can provide additional details about the task, offering more context or specific instructions.
- **Due Date:** A key feature that allows users to set deadlines, helping them prioritize tasks based on urgency.

#### Processing

- **Adding a Todo:** When a user inputs a new task, the app stores this information securely in the database, ensuring it is accessible whenever needed.
- **Editing a Todo:** Users can make changes to their tasks, and these updates are immediately reflected in the database, maintaining up-to-date records.
- **Marking as Done or Undone:** The status of a task can be toggled between done and undone, allowing users to track their progress and manage ongoing tasks effectively.
- **Viewing Todos:** Users can retrieve and view all their tasks from the database, providing a clear overview of their current workload.

#### Outputs

- **Updated Todos List:** After any changes are made, the app refreshes and displays the updated list of tasks, ensuring users have the most current information at their fingertips.

#### Error Handling

- **Invalid Input:** If users fail to provide necessary information, such as an empty title, the app will prompt them with an error message, encouraging correction before proceeding.
- **Database Errors:** Should any issues arise in storing or retrieving tasks, the app will notify users and suggest trying again later, ensuring transparency and reliability.

### 2. Messages Feature

#### Introduction

The Messages feature is built to foster real-time communication between users, enabling them to connect seamlessly. Whether for personal use or collaborative work, this feature is vital for maintaining efficient communication channels.

#### Inputs

- **User Search:** Users can search for others by inputting a name or username, making it easy to initiate conversations.
- **Message Content:** Users type out their messages in a text field, preparing them for instant transmission to the recipient.

#### Processing

- **Searching for Users:** The app queries the database for matching user profiles based on the search criteria, displaying results that allow users to connect easily.
- **Sending Messages:** Once a message is composed, it is stored in the database and delivered to the recipient via **Socket.IO**, ensuring real-time transmission.
- **Receiving Messages:** The app retrieves messages from the database and displays them in the user's chat interface, maintaining a smooth flow of communication.

#### Outputs

- **Search Results:** The app displays the results of a user search, showing potential contacts that match the input criteria.
- **Sent Messages:** After a message is successfully sent, it is displayed in the user's chat history, providing confirmation of delivery.
- **Received Messages:** Incoming messages are displayed in the chat interface, allowing users to view and respond to them promptly.

#### Error Handling

- **User Not Found:** If the searched user cannot be located, the app informs the user and suggests refining the search criteria.
- **Message Sending/Receiving Errors:** If there are any disruptions in sending or receiving messages, the app alerts users with an error message and advises them to try again later.


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

