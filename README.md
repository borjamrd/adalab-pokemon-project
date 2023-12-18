# Adalab Pokemon-Application

This project contains a fullstack application that allows you to find all of your favorite Pokemon and explore their evolutions, abilities, experience, and more detailed information!

In order to start both server and client side you must clone this repository:

```
git clone git@github.com:borjamrd/adalab-pokemon-project.git
```

navigate to the main project folder

```
cd adalab-pokemon-project
```

## Backend

To start the backend application, follow these steps:

1. Open a terminal and navigate to the backend directory: `cd adalab-server`
2. In root folder, you must create an .env file and add this provisional URL in order to access the mongodb atlas database and the provisional BASE_URL to fetch next data with pagination:

```
BASE_URL=https://adalab-server.onrender.com/api
MONGO_URI=mongodb+srv://adalab:1234@adalab-cluster.znwwmvg.mongodb.net/adalab-pokemon?retryWrites=true&w=majority
```

2. Install the required dependencies: `npm install`
3. Start the backend server: `npm start`

The backend server will start running on `http://localhost:4500`.

## Frontend

To start the frontend application, follow these steps:

1. Open a new terminal and navigate to the frontend directory: `cd adalab-client`
2. Install the required dependencies: `npm install`
3. Start the frontend development server: `npm start`

The frontend application will be accessible on `http://localhost:3000`.
