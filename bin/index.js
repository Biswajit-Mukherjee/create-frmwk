#!/usr/bin/env node


// #################################### IMPORTS ####################################
const fs = require("fs");
const execSync = require("child_process").execSync;


// #################################### VARIABLES ####################################

// Variables
let isCliCmdfailed = false;

const INSTALL_LOG = "\x1b[33m%s\x1b[0m";
const SUCCESS_LOG = "\x1b[32m%s\x1b[0m";
const SRC_DIR_PATH = "/src";
const SRC_SCRIPTS_DIR_PATH = SRC_DIR_PATH + "/scripts";
const SRC_STYLES_DIR_PATH = SRC_DIR_PATH + "/styles";
const SRC_BASE_CSS_FILE_PATH = process.cwd() + SRC_STYLES_DIR_PATH + "/base.css";
const SRC_MAIN_CSS_FILE_PATH = process.cwd() + SRC_STYLES_DIR_PATH + "/main.css";
const SRC_SCRIPT_FILE_PATH = process.cwd() + SRC_SCRIPTS_DIR_PATH + "/main.js";
const INDEX_HTML_FILE_PATH = process.cwd() + SRC_DIR_PATH + "/index.html";
const INDEX_HTML_TITLE = "Boilerplate app";
const INDEX_HTML_DEFAULT_TEXT = `${INDEX_HTML_TITLE} running`;
const INDEX_HTML_DEFAULT_LINK = "https://github.com/Biswajit-Mukherjee/create-project-boilerplate";
const PROJECT_NAME = INDEX_HTML_DEFAULT_LINK.substring(38, INDEX_HTML_DEFAULT_LINK.length);
const PORT = "3000";
const PACKAGE_JSON_FILE_PATH = process.cwd() + "/package.json";
const CREATE_PACKAGE_JSON_DEFAULT = "npm init -y";
const BABELRC_FILE_PATH = process.cwd() + "/.babelrc";


// Babel and Parcel-bundler commands
const INSTALL_BABEL =
  "npm i -D babel-loader babel-jest @babel/core @babel/preset-env @babel/cli @babel/plugin-transform-runtime @babel/runtime @babel/runtime-corejs3";
const INSTALL_PARCEL_BUNDLER = "npm i -D parcel-bundler";

// Sass command
const INSTALL_SASS = "npm i -D sass";

// ESLint command
const INSTALL_ESLINT = "npm install eslint --save-dev";

// Jest command
const INSTALL_JEST = "npm install --save-dev jest";

// testing-library dom command
const INSTALL_TESTING_LIBRARY_DOM = "npm install --save-dev @testing-library/dom";

// Start server command
const START = `parcel src/index.html --open -p ${PORT}`;


// #################################### FILES ####################################

// package.json file
const PACKAGE_JSON_CONTENT = `{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "parcel src/index.html -p 3000 --open",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`

// .babelrc file
const BABELRC_CONTENT = `{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3",
        "targets": {"node": "current"}
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3,
        "regenerator": true
      }
    ]
  ]
}
`;

// HTML file
const INDEX_HTML_CONTENT = `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Metadata -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- App title -->
    <title>${INDEX_HTML_TITLE}</title>

    <!-- Stylesheets -->
    <link rel="stylesheet" href="./styles/base.css" />
    <link rel="stylesheet" href="./styles/main.css" />

    <!-- Fontawesome icon library -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- General Sans Font - fontshare -->
    <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,500,300,600,400,700&display=swap" rel="stylesheet">

    <!-- Favicon (Remove default PATH and add favicon PATH in href attribute) -->
    <link
      rel="shortcut icon"
      href="https://i.ibb.co/BBKcqrZ/favicon.jpg"
      type="image/x-icon"
    />
  </head>

  <body>
    <!-- App -->
    <div id="root">
      <div class="app">
        <div class="app__icon">
          <div class="icon__primary">
            <div class="loadingio-spinner-gear-w89dy36c15">
              <div class="ldio-q9zcyp9hx3l">
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <style type="text/css">
              @keyframes ldio-q9zcyp9hx3l {
                0% {
                  transform: rotate(0deg);
                }
                50% {
                  transform: rotate(22.5deg);
                }
                100% {
                  transform: rotate(45deg);
                }
              }
              .ldio-q9zcyp9hx3l > div {
                transform-origin: 180px 180px;
                animation: ldio-q9zcyp9hx3l 0.2s infinite linear;
              }
              .ldio-q9zcyp9hx3l > div div {
                position: absolute;
                width: 39.6px;
                height: 273.6px;
                background: #62d9fb;
                left: 180px;
                top: 180px;
                transform: translate(-50%, -50%);
              }
              .ldio-q9zcyp9hx3l > div div:nth-child(1) {
                width: 216px;
                height: 216px;
                border-radius: 50%;
              }
              .ldio-q9zcyp9hx3l > div div:nth-child(6) {
                width: 144px;
                height: 144px;
                background: rgba(NaN, NaN, NaN, 0);
                border-radius: 50%;
              }
              .ldio-q9zcyp9hx3l > div div:nth-child(3) {
                transform: translate(-50%, -50%) rotate(45deg);
              }
              .ldio-q9zcyp9hx3l > div div:nth-child(4) {
                transform: translate(-50%, -50%) rotate(90deg);
              }
              .ldio-q9zcyp9hx3l > div div:nth-child(5) {
                transform: translate(-50%, -50%) rotate(135deg);
              }
              .loadingio-spinner-gear-w89dy36c15 {
                width: 360px;
                height: 360px;
                display: inline-block;
                overflow: hidden;
                background: none;
              }
              .ldio-q9zcyp9hx3l {
                width: 100%;
                height: 100%;
                position: relative;
                transform: translateZ(0) scale(1);
                backface-visibility: hidden;
                transform-origin: 0 0;
              }
              .ldio-q9zcyp9hx3l div {
                box-sizing: content-box;
              }
              /* generated by https://loading.io/ */
            </style>
          </div>

          <div class="icon__secondary">
            <div class="loadingio-spinner-gear-i3gj8syr46e">
              <div class="ldio-hzck34v74cs">
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <style type="text/css">
              @keyframes ldio-hzck34v74cs {
                0% {
                  transform: rotate(0deg);
                }
                50% {
                  transform: rotate(22.5deg);
                }
                100% {
                  transform: rotate(45deg);
                }
              }
              .ldio-hzck34v74cs > div {
                transform-origin: 56.00000000000001px 56.00000000000001px;
                animation: ldio-hzck34v74cs 0.2s infinite linear;
              }
              .ldio-hzck34v74cs > div div {
                position: absolute;
                width: 12.32px;
                height: 85.12px;
                background: #62d9fb;
                left: 56.00000000000001px;
                top: 56.00000000000001px;
                transform: translate(-50%, -50%);
              }
              .ldio-hzck34v74cs > div div:nth-child(1) {
                width: 67.2px;
                height: 67.2px;
                border-radius: 50%;
              }
              .ldio-hzck34v74cs > div div:nth-child(6) {
                width: 44.800000000000004px;
                height: 44.800000000000004px;
                background: rgba(NaN, NaN, NaN, 0);
                border-radius: 50%;
              }
              .ldio-hzck34v74cs > div div:nth-child(3) {
                transform: translate(-50%, -50%) rotate(45deg);
              }
              .ldio-hzck34v74cs > div div:nth-child(4) {
                transform: translate(-50%, -50%) rotate(90deg);
              }
              .ldio-hzck34v74cs > div div:nth-child(5) {
                transform: translate(-50%, -50%) rotate(135deg);
              }
              .loadingio-spinner-gear-i3gj8syr46e {
                width: 112px;
                height: 112px;
                display: inline-block;
                overflow: hidden;
                background: none;
              }
              .ldio-hzck34v74cs {
                width: 100%;
                height: 100%;
                position: relative;
                transform: translateZ(0) scale(1);
                backface-visibility: hidden;
                transform-origin: 0 0;
              }
              .ldio-hzck34v74cs div {
                box-sizing: content-box;
              }
              /* generated by https://loading.io/ */
            </style>
          </div>

          <div class="icon__tertiary">
            <div class="loadingio-spinner-gear-140cq0efhkd">
              <div class="ldio-jz6mqe92nkl">
                <div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <style type="text/css">
              @keyframes ldio-jz6mqe92nkl {
                0% {
                  transform: rotate(0deg);
                }
                50% {
                  transform: rotate(22.5deg);
                }
                100% {
                  transform: rotate(45deg);
                }
              }
              .ldio-jz6mqe92nkl > div {
                transform-origin: 50px 50px;
                animation: ldio-jz6mqe92nkl 0.2s infinite linear;
              }
              .ldio-jz6mqe92nkl > div div {
                position: absolute;
                width: 11px;
                height: 76px;
                background: #62d9fb;
                left: 50px;
                top: 50px;
                transform: translate(-50%, -50%);
              }
              .ldio-jz6mqe92nkl > div div:nth-child(1) {
                width: 60px;
                height: 60px;
                border-radius: 50%;
              }
              .ldio-jz6mqe92nkl > div div:nth-child(6) {
                width: 40px;
                height: 40px;
                background: rgba(NaN, NaN, NaN, 0);
                border-radius: 50%;
              }
              .ldio-jz6mqe92nkl > div div:nth-child(3) {
                transform: translate(-50%, -50%) rotate(45deg);
              }
              .ldio-jz6mqe92nkl > div div:nth-child(4) {
                transform: translate(-50%, -50%) rotate(90deg);
              }
              .ldio-jz6mqe92nkl > div div:nth-child(5) {
                transform: translate(-50%, -50%) rotate(135deg);
              }
              .loadingio-spinner-gear-140cq0efhkd {
                width: 56px;
                height: 56px;
                display: inline-block;
                overflow: hidden;
                background: none;
              }
              .ldio-jz6mqe92nkl {
                width: 100%;
                height: 100%;
                position: relative;
                transform: translateZ(0) scale(0.56);
                backface-visibility: hidden;
                transform-origin: 0 0;
              }
              .ldio-jz6mqe92nkl div {
                box-sizing: content-box;
              }
              /* generated by https://loading.io/ */
            </style>
          </div>
        </div>
        <p class="app__text">${INDEX_HTML_DEFAULT_TEXT}</p>
        <div class="link-wrapper">
          <a
            class="app__link"
            href="${INDEX_HTML_DEFAULT_LINK}"
            target="_blank"
          >
            <div class="link__icon"><i class="fa-brands fa-github"></i></div>
            <div class="link__text"><span>${PROJECT_NAME}</span></div>
          </a>
        </div>
      </div>
    </div>

    <!-- Script files -->
    <script src="./scripts/main.js"></script>
  </body>
</html>
`;

// CSS files
const BASE_CSS_STYLES = `/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html {
  height: 100vh;
  width: 100vw;
}

html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  font: 400 1rem/1.54 Arial, sans-serif;
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
}

/* A elements that don't have a class get default styles */
a {
  color: inherit;
  font: inherit;
  text-decoration: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

const MAIN_CSS_STYLES = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root {
  --bg-dark: #1E1E1E;
  --clr-primary-300: #92e7fc;
  --clr-primary-400: #62d9fb;
  --clr-primary-500: #2ecefa;
  --clr-primary-600: #06bcef;
  --off-white: #f4f4f4;
  --ff-prim: 'Inter', 'General Sans', Arial, Helvetica, sans-serif;
}

body {
  font-family: var(--ff-prim);
}

#root {
  background: var(--bg-dark);
  color: var(--off-white);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.app {
  margin: auto;
}

.app .app__icon {
  display: flex;
  align-items: baseline;
}

.app__icon .icon__primary {
  position: relative;
  left: 4.25rem;
}

.app__icon .icon__secondary {
  position: relative;
  left: -2rem;
  top: -16rem;
}

.app__icon .icon__tertiary {
  position: relative;
  left: -8.5rem;
  top: -2rem;
}

.app .app__text {
  color: var(--clr-primary-600);
  font-size: 1.25rem;
  font-weight: 400;
  padding-top: .25rem;
  text-align: center;
}

.link-wrapper {
  background: inherit;
  color: inherit;
  padding-top: 1.25rem;
}

.app .app__link {
  align-items: center;
  background: inherit;
  color: inherit;
  display: flex;
  font-size: 2rem;
  gap: .6rem;
  justify-content: center;
  padding: 6px;
  transition: color .15s ease;
}

.app__link:hover .link__text,
.app__link:active .link__text {
  color: white;
  text-decoration: underline;
}

.app .app__link .link__icon,
.app .app__link .link__text {
  display: flex;
  flex-direction: column;
}

.app .app__link .link__icon > *,
.app .app__link .link__text > * {
  color: inherit;
  margin: auto;
  vertical-align: middle;
}

.app__link span {
  font-size: 1.2rem;
  font-weight: 200;
}
`;

// Javascript file
const SCRIPT_CONTENT = `"use strict";

console.log("${INDEX_HTML_DEFAULT_TEXT}!");
`;


// #################################### FUNCTIONS ####################################

// Create directory
const createDir = (dirPath) => {
  fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
    if (error) {
      console.log(error);
    } else {
      null;
    }
  });
};

// Create file
const createFile = (filePath, fileContent = "") => {
  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      console.log(error);
    } else {
      null;
    }
  });
};

// Write to file
const writeToFile = (filePath, fileContent) => {
  try {
    // file written successfully
    fs.writeFileSync(filePath, fileContent);
  } catch (err) {
    // Log the error
    console.error('Error occured while writing to file: ' + err);
  }
};

// Execute cli command
const runCliCommand = command => {
  if (isCliCmdfailed) {
    return;
  }
  try {
    // Run the node/ cli command
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (e) {
    isCliCmdfailed = true;
    console.error(`Failed to execute ${command}`, e);
  }
};


// #################################### CLI ####################################

// Create & configure package.json
console.log(`${SUCCESS_LOG}`, "\n Generating package.json file... \n");

runCliCommand(CREATE_PACKAGE_JSON_DEFAULT);
writeToFile(PACKAGE_JSON_FILE_PATH, "");
writeToFile(PACKAGE_JSON_FILE_PATH, PACKAGE_JSON_CONTENT);


// Initialize project
console.log("\nCreating project boilerplate. This might take a while.\n");
console.log(`${SUCCESS_LOG}`, "Initializing project...");

// Create src folder
createDir(SRC_DIR_PATH);

// Create src/index.html file
createFile(INDEX_HTML_FILE_PATH);

// Create src/scripts folder
createDir(SRC_SCRIPTS_DIR_PATH);

// Create src/scripts/main.js file
createFile(SRC_SCRIPT_FILE_PATH);

// Create src/styles folder
createDir(SRC_STYLES_DIR_PATH);

// Create src/styles/base.css & main.css files
createFile(SRC_BASE_CSS_FILE_PATH);
createFile(SRC_MAIN_CSS_FILE_PATH);

// Write to HTML file
writeToFile(INDEX_HTML_FILE_PATH, INDEX_HTML_CONTENT);

// Write to CSS file
writeToFile(SRC_BASE_CSS_FILE_PATH, BASE_CSS_STYLES);
writeToFile(SRC_MAIN_CSS_FILE_PATH, MAIN_CSS_STYLES);

// Write to JS file
writeToFile(SRC_SCRIPT_FILE_PATH, SCRIPT_CONTENT);

// Create & configure .babelrc
console.log(`${SUCCESS_LOG}`, "\nGenerating .babelrc file... \n");

createFile(BABELRC_FILE_PATH);
writeToFile(BABELRC_FILE_PATH, BABELRC_CONTENT);


// ################################# INSTALL DEPENDENCIES #################################

console.log(`${SUCCESS_LOG}`, "\nInstalling dependencies...\n");

// Install babel
console.log(`${INSTALL_LOG}`, "\nInstalling Babel...\n");
runCliCommand(INSTALL_BABEL);

// Install parcel-bundler
console.log(`${INSTALL_LOG}`, "\nInstalling Parcel...\n");
runCliCommand(INSTALL_PARCEL_BUNDLER);

// Install SASS
console.log(`${INSTALL_LOG}`, "\nInstalling SASS...\n");
runCliCommand(INSTALL_SASS);

// Install ESLint
console.log(`${INSTALL_LOG}`, "\nInstalling ESLint...\n");
runCliCommand(INSTALL_ESLINT);

// Install Jest
console.log(`${INSTALL_LOG}`, "\nInstalling Jest...\n");
runCliCommand(INSTALL_JEST);

// Install testing-library/dom
console.log(`${INSTALL_LOG}`, "\nInstalling DOM Testing Library...\n");
runCliCommand(INSTALL_TESTING_LIBRARY_DOM);

// Start the development server
console.log(`${SUCCESS_LOG}`, "\nStarting development server...");
console.log("\nPress CTRL + C to stop the server.\n");

runCliCommand(START);
