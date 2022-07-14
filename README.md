# create-project-boilerplate

Project boilerplate for a modern ES6+ cross-browser compatible workflow with no build configuration.

  - [Check npm version](#check-npm-version) – How to check npm version.
  - [Creating a boilerplate](#creating-a-boilerplate) – How to setup a project boilerplate.
  - [Usage](#usage) – How to use the boilerplate to develop modern web apps.


## Prerequisites

- [npm v5.2 or later](https://nodejs.org/)


## Comes with the following libraries and utilities

![Babel](https://miro.medium.com/max/800/1*uHfsgDL4wCKszR7jh8dbYg.png)
![Parcel](https://user-images.githubusercontent.com/19409/135924939-03845d0b-e7bb-414b-89b6-e627dfa9f614.png)
![SASS](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png)
![Tailwindcss](https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.png)
![Alpine.js](https://static.cdnlogo.com/logos/a/19/alpine.svg)
![ESLint](https://www.vectorlogo.zone/logos/eslint/eslint-ar21.png)
![Jest](https://jestjs.io/img/opengraph.png)
![DOM Testing Library](https://pbs.twimg.com/media/DaGo_txU8AEE8SN.jpg)
![Fontawesome Icon Library](https://solutionsresource.com/wp-content/uploads/2021/09/the-benefits-of-using-fontawesome-icons-on-a-website.png)


## Features

- Cross-browser compatible code using **[Babel](https://babeljs.io/)**
- Integrated **[Fontawesome](https://fontawesome.com/)** support using **CDN**
- **Hot Module Reload(HMR)** and support for **ES Modules** using **[Parcel](https://parceljs.org/)**
- Comes with **[Alpine.js](https://alpinejs.dev/)**, **[SASS](https://sass-lang.com/)** & **[tailwindcss](https://tailwindcss.com/)** built-in to help you write industry-level code
- **[ESLint](https://eslint.org/)** to quickly find and fix problems in your Javascript code
- Comes with testing libraries - **[Jest](https://jestjs.io/)** & **[DOM Testing Library](https://testing-library.com/)**


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
