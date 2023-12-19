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

1. Open a terminal and navigate to the backend directory:

```
pcd adalab-server
```

2. In root folder, you must create a `development.env` file and add this variables in order to access the mongodb atlas database and stablish your local PORT and the BASE_URL for "next" field in the pagination:

```
NODE_ENV=development
MONGO_URI="mongodb+srv://adalab:1234@adalab-cluster.znwwmvg.mongodb.net/adalab-pokemon?retryWrites=true&w=majority"
BASE_URL=http://localhost:4500/api
HOST=localhost
PORT=4500
```

2. Install the required dependencies: `npm install`
3. Start the backend server: `npm run dev`

The backend server will start running on `http://localhost:4500`
Check the first 20 pokemons here: `http://localhost:4500/api/pokemon`

## Frontend

To start the frontend application, follow these steps:

1. Open a new terminal and navigate to the frontend directory: `cd adalab-client`
2. Install the required dependencies: `npm install`
3. Start the frontend development server: `npm run dev`

The frontend application will be accessible on `http://localhost:3000`.
