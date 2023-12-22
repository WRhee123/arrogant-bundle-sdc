# ArrogantBundle 
Replica of HumbleBundle product details page

## Table of Contents
- [Introduction](#introduction)
- [File Structure](#file-structure)
- [Running the Server](#running-the-server)
- [PostgreSQL](#postgresql)
- [Express](#express)
- [React](#react)
- [NodeJS](#nodejs)
- [Static Content](#static-content)
- [Vite Configuration](#vite-configuration)
- [License](#license)
- [NPM Scripts](#npm-scripts)
- [How To Use](#how-to-use)

## File Structure
```
├── LICENSE
├── README.md
├── package.json
├── public
│   ├── dist
│   └── media
│       └── images
│           ├── ad-choices
│           │   ├── transparent-background.png
│           │   └── white-background.png
│           ├── backgrounds
│           │   └── header.jpg
│           ├── cart.png
│           ├── favicon.png
│           ├── language.png
│           ├── loading.gif
│           ├── operating-systems
│           │   ├── linux-other-products.png
│           │   ├── mac-os-other-products.png
│           │   ├── nintendo-switch.png
│           │   └── windows-other-products.png
│           ├── platforms
│           │   ├── drm-free-other-products.png
│           │   ├── nintendo-switch.png
│           │   └── steam-other-products.png
│           ├── products
│           │   ├── super-mario-rpg
│           │   │   ├── gameplay
│           │   │   │   ├── 01.jpeg
│           │   │   │   ├── 02.jpeg
│           │   │   │   ├── 03.jpeg
│           │   │   │   ├── 04.jpeg
│           │   │   │   ├── 05.jpeg
│           │   │   │   ├── 06.jpeg
│           │   │   │   ├── 07.jpeg
│           │   │   │   ├── 08.jpeg
│           │   │   │   ├── 09.jpeg
│           │   │   │   ├── 10.jpeg
│           │   │   │   ├── 11.jpeg
│           │   │   │   ├── 12.jpeg
│           │   │   │   ├── 13.jpeg
│           │   │   │   ├── 14.jpeg
│           │   │   │   ├── 15.jpeg
│           │   │   │   ├── 16.jpeg
│           │   │   │   ├── 17.jpeg
│           │   │   │   ├── 18.jpeg
│           │   │   │   ├── 19.jpeg
│           │   │   │   └── 20.jpeg
│           │   │   └── thumbnail.jpeg
│           │   ├── ys-memories-of-celceta
│           │   │   └── thumbnail.jpeg
│           │   ├── ys-origin
│           │   │   └── thumbnail.jpeg
│           │   ├── ys-vi-the-ark-of-napishtim
│           │   │   └── thumbnail.jpeg
│           │   ├── z-dawn
│           │   │   └── thumbnail.jpeg
│           │   ├── zwei-the-arges-adventure
│           │   │   └── thumbnail.jpeg
│           │   └── zwei-the-ilvard-insurrection
│           │       └── thumbnail.jpeg
│           ├── ratings
│           │   └── e.png
│           ├── socials
│           │   ├── blog.png
│           │   ├── facebook.png
│           │   ├── instagram.png
│           │   └── twitter.png
│           ├── stars
│           │   ├── grey-border.png
│           │   ├── solid-gold.png
│           │   └── solid-white.png
│           └── wallet.png
├── src
│   ├── database
│   │   ├── Entity Relationship Diagram.png
│   │   ├── database.js
│   │   ├── migration.sql
│   │   └── seed.sql
│   ├── main.js
│   ├── react
│   │   ├── css
│   │   │   └── main.css
│   │   ├── index.html
│   │   └── js
│   │       ├── api.js
│   │       ├── components
│   │       │   └── App.jsx
│   │       └── react.jsx
│   └── server
│       ├── middleware.js
│       ├── routes.js
│       ├── server.js
│       └── settings.js
└── vite.config.js
```

## Running the Server
To build the React application into files that can be statically served, run `npm run build`.
To launch the server, run `npm run server`.
To perform both actions at once, run `npm run start`.

## PostgreSQL
Database related files can be found in the `/src/database` directory. This directory includes 4 files:
1. `migration.sql` - This file is used to create tables and columns in your database.
2. `seed.sql` - This file is used to seed your database tables with data.
3. `Entity Relationship Diagram.png` - This file is an image of your database's ERD. We recommend using [DrawSQL](https://drawsql.app).
4. `database.js` - This file is the JavaScript code that connects to your PostgreSQL database and exports the database pool object.

## Express
Express server files can be found in the `/src/server` directory. This directory includes 4 files:
1. `server.js` - This file creates an instance of an Express server and exports it.
2. `middleware.js` - This file exports a function which takes in your server instance as a parameter and adds middlewares to said server instance.
3. `setttings.js` - This file exports a function which takes in your server instance as a parameter and adds settings to said server instance.
4. `routes.js` - This file exports a function which takes in your server instance as a parameter and adds routes to said server instance.

## React
React source code files can be found in the `/src/react` directory. These files are then built using the vite module and the output is stored in the `/public/dist` directory which is statically served by the Express server instance.

## NodeJS
[NodeJS](https://nodejs.org/) is a JavaScript runtime enviroment that is designed to run on the back-end / server-side. A `.node-version` file is found at the project root to specify which version of Node is being used. This is often used by hosting services to determine which Node version to use. (We recommend using [Render](https://www.render.com).)

## Static Content
Static (non-dynamic) content can be found in the `/public/` directory. All of `public`'s sub-directories are meant to be statically served. However, the `public` directory itself is not. For example, media files like images, videos, etc can be found in the `/public/media` directory. As discussed earlier, the build output from vite is also meant to be statically served and can be found in the `/public/dist` directory. Any sub-directories you add to this folder need to be statically served in the `/src/server/middleware.js` file.

## Vite Configuration
The vite configuration file can be found at `/vite.config.js`. Vite's root directory is `/src/react` and the build output directory is `/public/dist`. The build directory gets completely wiped before each build process so do not store any other files in this directory.

## License
The license (MIT) can be found at `/LICENSE`.

## NPM Scripts
There are 4 NPM scripts that can be ran:
1. build - Builds the React source code located in `/src/react` into static vanilla JavaScript files located in `/public/dist`.
2. server - Starts the Express server
3. start - Runs the `build` script and then the `server` script.
4. lint - Checks for potential errors before having to search for them during runtime.

## How to Use
1. Fork this repository.
2. Run `npm install` to install all dependencies.
3. Edit the `LICENSE` file to more accurately reflect your project. Even if you plan on using the MIT license as we did, you still need to change the name in the license (right now it says "Bit-82").
4. Edit the `README.md` file to more accurately reflect your project. Only do this once you become familiar with the structure of this project and no longer need this file's information.
5. Create a `.env` file using the `.env.template` file to hold your enviroment variables.
6. Edit the `.node-version` file to contain your version of Node. This can be found by running `node --version` (not including the "v").
7. Customize your web application to fit your needs and happy coding!
