# create-project-boilerplate

Project boilerplate for a modern ES6+ cross-browser compatible workflow with no build configuration.

  - [Check npm version](#check-npm-version) – How to check npm version.
  - [Creating a boilerplate](#creating-a-boilerplate) – How to setup a project boilerplate.
  - [Usage](#usage) – How to use the boilerplate to develop modern web apps.


## Prerequisites

- [npm v5.2 or later](https://nodejs.org/)


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
- Integrated Fontawesome support using CDN. Directly use the fontawesome icon classes out of the box without any configuration
- Comes with integrated development server, Hot Module Reload(HMR), Strict mode and support for ES Modules
- Comes with Alpine.js, SASS & tailwindcss built-in to help you write industry-level code
- Comes with ESLint to quickly find and fix problems in your Javascript code
- Comes with testing libraries - Jest & DOM Testing Library


## Authors

- [Biswajit Mukherjee](https://github.com/Biswajit-Mukherjee)


## Check npm version

To check npm version, type the following command in the terminal:

```bash
  npm -v
```

As long as it is **5.2 or later**, you're good to go!


## Creating a boilerplate

**You’ll need to have npm 5.2 or later version**. We recommend using the latest LTS version of node.

**<h3>npx</h3>**

```bash
  npx create-project-boilerplate
```

To know more, refer to the [usage](#Usage) section.


## Usage

- Create a working directory
```bash
  mkdir my-dir
```

- Navigate to that directory in the terminal
```bash
  cd my-dir
```

- Run the following command:
```bash
  npx create-project-boilerplate
```

Inside the working directory, it will generate the initial project structure and install the required dependencies:

```bash
my-dir
├── node_modules
├── package.json
├── package-lock.json
├── tailwind.config.js
├── index.html
├── .parcel-cache
├── .babelrc
├── .postcssrc
├── dist
│   ├── index.html
│   └── # bundled css and js files
└── src
    ├── scripts
    │   └── main.js
    └── styles
        ├── base.css
        ├── main.css
        └── index.css

```

Once the setup is finished the server will start at [http://localhost:3000](http://localhost:3000) by default. It will rebuild your website/app everttime you make changes. Once the website/app is production ready, the dist folder can be deployed to the server.

- To run tests using Jest

```bash
    npm test
```

- To stop the server press **CTRL + C** (**CMD + C** for Mac/Linux).

- To restart the server

```bash
    npm start
```

This will open the page on a new tab in the browser. The port number can be changed to any port of your choice in the package.json file.
