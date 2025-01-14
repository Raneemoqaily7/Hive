# Blogging Platform System Design Documentation

## 1. Overview
The blogging platform is a web application that allows users to create, edit, delete, and interact with blogs. Key features include user authentication, blog management, and comments. The application ensures robust error handling and provides a seamless user experience.

---

## 2. Features
- **Browse Blogs**:
  - The app displays a list of blogs with a brief description.
  - To view full blog details, users must log in.
- **User Authentication**:
  - Sign up and log in using email, username, and password.
  - Option to log in via Google for ease of access.
- **Blog Management**:
  - Logged-in users can write, edit, or delete blogs.
  - Only the blog owner has permissions to edit or delete their blogs.
- **Comments**:
  - Users can comment on blogs after logging in.
- **Error Handling**:
  - The app handles common errors like authentication failures, missing data, or invalid requests, ensuring the user is informed.
- **Color Theme**
---

## 3. Architecture
The platform follows a **modular and decoupled architecture**:

### 3.1 Frontend
- **Framework**: Next.js (React-based framework)
- **Responsibilities**:
  - Renders blog lists, details, and forms dynamically.
  - Handles authentication and data fetching with `useSWR`.
  - Responsive UI for blog interactions and comments.

### 3.2 Backend
- **Framework**: Next.js API Routes
- **Responsibilities**:
  - Implements RESTful API endpoints for authentication, blogs, and comments.
  - Validates and processes user input.
  - Enforces access control for blog management.

### 3.3 Database
- **Database**: MongoDB
- **Schema Management**: Prisma ORM
- **Responsibilities**:
  - Stores users, blogs, categories, and comments.
  - Manages relationships, e.g., Blog ↔ User, Comment ↔ Blog.

### 3.4 Authentication
- **Library**: `next-auth`
- **Flow**:
  - Handles sign-up, login, and session management.
  - Supports email/password and Google OAuth.

---

## 4. Components Interaction and Data Flow

### 4.1 User Authentication
- **Sign Up/Login**:
  - Users can sign up using an email, username, and password or log in via Google.
  - Authentication ensures users can only access or modify their resources.

### 4.2 Blog Management
1. **View Blogs**:
   - The home page lists blogs with brief descriptions.
   - Logged-in users can view full details by clicking "Read More."
2. **Create/Edit/Delete Blogs**:
   - Only logged-in users can create blogs.
   - Blog owners can edit or delete their blogs using secure endpoints.

### 4.3 Comments
1. **Add Comments**:
   - Logged-in users can comment on blogs.
2. **View Comments**:
   - Comments are displayed below the blog, showing the username and timestamp.

### 4.4 Error Handling
- Errors like authentication failures or invalid input are caught and displayed to the user in a user-friendly manner.

---

## 5. Setup and Run the Application (Locally)

### 5.1 Clone the Repository
Navigate to the [GitHub Repository](https://github.com/Raneemoqaily7/BlogHive) and clone it using:
```bash
git clone https://github.com/Raneemoqaily7/BlogHive.git
```

### 5.2 Install Dependencies
Run the following commands to install dependencies and start the development server:

```bash
npm install
npm run dev
```
### 5.3 Access the Application
Once the development server is running, open your browser and navigate to:

```bash
http://localhost:3000
```