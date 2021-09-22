<h1 align="center">LMS - LEARNING MANAGMENT SYSTEM</h1>
<h3 align="center">E-LEARNING MARKETPLACE - MERN STACK</h3>

<h3 align="left">STACK:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

## _**PLEASE READ THIS TO COMPLETION BEFORE ASKING ANY QUESTIONS!**_

###

### _**IMPORTANT NOTES**_ -

This project does not have a mongoDB connection setup.

-   local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.example.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.

## Getting Started

This repository aims to assist you in beginning work on a MERN stack application for heroku deployment with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams by clicking the green "Use this template" button above.

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json. Alternatively your group may choose to simplify this process by using yarn workspaces as specified [here](https://yarnpkg.com/lang/en/docs/workspaces/).

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file.

## Available Scripts

Please note that any time the server is run in these scripts `nodemon` is used in place of `node` for easier development. If you are interested in how this works follow the nodemon In the project directory, you can run:

### `yarn workspace server dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `yarn workspace client start`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `yarn workspace server start`

Runs just the server in development mode.<br>

### `yarn workspace server build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## File structure

#### `client` - Holds the client application

-   #### `public` - This holds all of our static files
-   #### `src`
    -   #### `assets` - This folder holds assets such as images, docs, and fonts
    -   #### `components` - This folder holds all of the different components that will make up our views
    -   #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components
    -   #### `App.js` - This is what renders all of our browser routes and different views
    -   #### `index.js` - This is what renders the react app by rendering App.js, should not change
-   #### `package.json` - Defines npm behaviors and packages for the client

#### `server` - Holds the server application

-   #### `config` - This holds our configuration files, like mongoDB uri
-   #### `controllers` - These hold all of the callback functions that each route will call
-   #### `models` - This holds all of our data models
-   #### `routes` - This holds all of our HTTP to URL path associations for each unique url
-   #### `tests` - This holds all of our server tests that we have defined
-   #### `server.js` - Defines npm behaviors and packages for the client

#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README

#### `.gitignore` - Tells git which files to ignore

#### `README` - This file!

## Learn More

To learn how to setup a local MongoDB instance for testing, check out how to [connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).

backlogs:
1- falta logica boton disabled en registerform
2- corregir error en backend/controllers/auth.js
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
at register (C:\Users\shalema\Documents\alanshalem\lms\backend\controllers\auth.js:26:30)
at register (C:\Users\shalema\Documents\alanshalem\lms\backend\controllers\auth.js:46:28)
3- si necesito tirar los puertos en uso abro cmd como admin y tiro taskkill /F /IM node.exe
