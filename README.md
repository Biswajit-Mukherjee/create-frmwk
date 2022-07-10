

# create-project-boilerplate

Project boilerplate for a modern ES6+ cross-browser compatible workflow to create websites and web apps using HTML, CSS, SASS and Javascript. Uses Babel to ensure that the code you write is compatible across browsers and uses Parcel for file/module bundling and to provide a development server. ESLint for linting.




## Prerequisites

 - [Node v5.2+](https://nodejs.org/)




## Comes with the following libraries and utilities

 - [Babel](https://babeljs.io/)
 - [Parcel](https://parceljs.org/)
 - [SASS](https://sass-lang.com/)
 - [ESLint](https://eslint.org/)
 - [Fontawesome Icon Library](https://fontawesome.com/)




## Features

 - Cross-browser compatible code. Write code for the future that is supported by browsers of the past
 - Inbuilt SASS support
 - Integrated support for Fontawesome icons using CDN. Directly use the fontawesome icon classes out of the box without any configuration
 - Comes with integrated development server, Hot Module Reload(HMR) enabled by default and support for ES Modules
 - Comes with ESLint support to quickly find and fix problems in your Javascript code




## Authors

- [Biswajit Mukherjee](https://github.com/Biswajit-Mukherjee)




## Installation

- Directly execute from terminal using npx command

```bash
  npx create-project-boilerplate
```




## Documentation

To get started all you need is a working directory with Node installed. After running the npx command, it will automatically generate a package.json file, a .babelrc file and add all the required dependencies for you. Once finished the server will automatically start at localhost:3000 by default. It will automatically rebuild your website/app as you make changes in the src folder. Once the website/app is production ready, the dist folder can be deployed.

- To stop the server

    CTRL + C (CMD + C for Mac/Linux).

- To restart the server

```bash
    npm start
```

This will open the page on a new tab in the browser. The port number can be changed to any port of your choice.
