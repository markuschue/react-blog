# MERN Project Boilerplate
This is a custom simple boilerplate for a MERN project.

* On the `api` folder, you will find the backend code, which is a NodeJS API using Express and MongoDB.
* On the `client` folder, you will find the frontend code, which is a ReactJS app that runs a default App with a Data component used for fetching data from the API.

This boilerplate has the purpose of keeping things simple, so some of the default files from the Express and React generators are removed, such as the `reportVitals.js` or testing files in the React app.  
To retrieve the default files, you can just run `npx express-generator` or `npx create-react-app` on the `api` and `client` folders, respectively,
or you can consult the official documentation for each of them. 

## Features
In this boilerplate you will find a custom Express server with the following features:
* It's mainly an Express server created with `npx express-generator`, so it contains many of the default files.
* A main app file (in `api/app.js`). Here the Express server is created and the routes are added.
* Two routes (under the `api/routes` folder):
  * `/api/routes/index.js` - This is the main route, which just returns a JSON with a message.
  * `/api/routes/test.js` - This contains a route with methods for fetching data from a test MongoDB database.
  * To add more routes, just create a new file under the `api/routes` folder and add the route to the `api/app.js` file.
* A custom Mongoose model (under the `api/models` folder):
  * `api/models/test.js` - This is a simple model for a test database. The `testDB` database is created here.

Regarding the React app, you will find the following features:
* It's mainly a React app created with `npx create-react-app`, so it contains many of the default files.
* The components are under the `client/src/components` folder.
  * `client/src/components/App.js` - This is the main component, which renders the `Data` component.
  * `client/src/components/Data.js` - This is a custom component used for fetching JSON data from the backend. 

## How to use
* Clone this repo
* Run `npm install` on the root folder and on the `api` and `client` folders.
* Run `npm run dev` on the root folder to start the API and the React app.
* Your API will be running on `http://localhost:9000` and your React app will be running on `http://localhost:3000`
* On the React app, you will see a rendered object from the API. This is the result of the `Data` component fetching data from the database through the API.
