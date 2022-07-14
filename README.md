# create-project-boilerplate

Project boilerplate for a modern ES6+ cross-browser compatible workflow to create websites and web apps using HTML, CSS, SASS and Javascript. Write industry-level code with the help of tools such as tailwindcss and alpine. It contains an index.css tailwind file, a base.css reset file and a main.css file in the src/styles folder. Uses Babel to ensure that the code you write is compatible across browsers and uses Parcel for bundling and to provide a development server. Uses ESLint for linting and Jest, DOM Testing Library for testing.

## Prerequisites

- [Node v5.2+](https://nodejs.org/)

## Comes with the following libraries and utilities

- [Babel](https://babeljs.io/)
- [Parcel](https://parceljs.org/)
- [SASS](https://sass-lang.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [Alpine.js](https://alpinejs.dev/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro/)
- [Fontawesome Icon Library](https://fontawesome.com/)

## Features

- Cross-browser compatible code using Babel. Write code for the future that is supported by browser versions of the past
- Inbuilt SASS support
- Integrated Fontawesome support using CDN. Directly use the fontawesome icon classes out of the box without any configuration
- Comes with integrated development server, Hot Module Reload(HMR) and support for ES Modules
- Comes with Alpine.js & tailwindcss built-in to help you write industry-level code
- Comes with ESLint to quickly find and fix problems in your Javascript code
- Strict mode enabled by default to ensure good code syntax
- Comes with testing libraries - Jest & DOM Testing Library

## Authors

- [Biswajit Mukherjee](https://github.com/Biswajit-Mukherjee)

## Installation

- Directly execute from terminal using npx command

```bash
  npx create-project-boilerplate
```

To know more, refer to the [usage](#Usage) section


## Creating the boilerplate
Inside the working directory, it will generate the initial project structure and install the required dependencies:

```bash
<dir>
├── node_modules
├── package.json
├── package-lock.json
├── dist
│   ├── index.html
│   └── <!-- bundled css and js files -->
└── src
│   ├── scripts
│   │   └── main.js
│   └── styles
│       ├── base.css
│       ├── main.css
│       └── index.css
├── index.html
├── tailwing.config.js
├── .parcel-cache
├── .babelrc
└── .postcssrc
```


## Usage

Create a working directory and navigate to that directory in the terminal. Run the following command:

```bash
  npx create-project-boilerplate
```

This will automatically generate and configure a .babelrc file, a .postcssrc file, a package-lock.json file, a package.json file and a tailwind.config.js file and install all the required dependencies for you. Once finished the server will start at localhost:3000 by default. It will rebuild your website/app everttime you make changes. Once the website/app is production ready, the dist folder can be deployed to the server.

- To run tests using Jest

```bash
    npm test
```

- To stop the server

  CTRL + C (CMD + C for Mac/Linux)

- To restart the server

```bash
    npm start
```

This will open the page on a new tab in the browser. The port number can be changed to any port of your choice in the package.json file.
