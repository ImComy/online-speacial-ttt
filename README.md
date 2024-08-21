# Online Special Tic-Tac-Toe

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Introduction
**Online Special Tic-Tac-Toe** is a full-stack web application that enhances the classic Tic-Tac-Toe game by introducing a twist: each player can only place 3 X's or O's, making the game more dynamic and reducing the likelihood of a draw. The project is built with React.js, CSS, Node.js, Express.js, and StreamChat services.

## Features
- User signup/login functionality.
- Secure password handling with bcrypt.
- Responsive UI powered by React.js.
- RESTful API built with Express.js.
- Real-time chat functionality using StreamChat.
- Game Invitations: Send and receive game invitations to challenge friends.
- Online Multiplayer: Play against other players in real-time.
- Channel-Based Gameplay: Join or create channels to play games with other players.
- Real-Time Updates: Receive updates on the game board and player moves in real-time.

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [StreamChat API](https://getstream.io/chat/)

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/ImComy/online-special-ttt.git
    cd online-special-ttt/server
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and add the following environment variables:
    ```env
    PORT=8000
    API_KEY=your_streamchat_api_key
    API_SECRET=your_streamchat_api_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../client
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Set up the StreamChat API key in `src/app.jsx`:
    ```javascript
      const api_key = " add you own api key ";
    ```

4. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Usage
1. After running the development servers, open your browser and navigate to the provided link.
2. Sign up for a new account or log in with an existing account.
3. Enter your opponent’s username and wait for them to enter yours so that you both join the same game channel.
4. Enjoy the game!

## API Endpoints
- `POST /signup`: Register a new user.
- `POST /login`: Authenticate a user.

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Open a pull request.
