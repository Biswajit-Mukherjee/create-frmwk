const fs = require('fs');

const SRC_DIR_PATH = '/src';
const SRC_CSS_FILE_PATH = process.cwd() + '/src/styles.css';
const SRC_SCRIPT_FILE_PATH = process.cwd() + '/src/main.js';

const createDir = (dirPath) => {
  fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
    if (error) {
      console.log(error);
    } else {
      null;
    }
  });
};

const createFile = (filePath, fileContent = '') => {
  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      console.log(error);
    } else {
      null;
    }
  });
};

createDir(SRC_DIR_PATH);
createFile(SRC_CSS_FILE_PATH);
createFile(SRC_SCRIPT_FILE_PATH);

console.log('\x1b[32m%s\x1b[0m', 'success', 'Initialized project structure!');
