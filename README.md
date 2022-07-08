
# create-project-boilerplate

Project boilerplate for a modern ES6+ cross-browser compatible workflow to create websites and web apps using HTML, CSS and Javascript. Uses Babel to ensure that the code you write is compatible across browsers and uses Parcel for file/module bundling and to provide a development server.



## Acknowledgements

 - [Babel](https://babeljs.io/)
 - [Parcel](https://parceljs.org/)


## Authors

- [Biswajit Mukherjee](https://github.com/Biswajit-Mukherjee)


## Installation

- Directly execute from terminal using npx command

```bash
  npx create-project-boilerplate
```
    
## Documentation

After successful installation the server will automatically start at localhost:3000 by default

- To stop the server

    CTRL + C (CMD + C for Mac/Linux).

- To restart the server, copy and paste the following command in the scripts object in your package.json file.

```bash
    "start": "parcel src/index.html -p 3000 --open"
```

The port number can be changed to any port of your choice.

## Tech Stack

Javascript and Node
