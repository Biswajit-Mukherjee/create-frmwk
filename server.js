// Start server at localhost:1234
const START = "parcel src/index.html --open -p 1234";

// Execute cli command
const runCliCommand = command => {
    try {
      // Run the node/ cli command
      execSync(`${command}`, { stdio: 'inherit' });
    } catch (e) {
      // Log the error
      console.error(`Failed to execute ${command}`, e);
    }
  };

// Start the development server
runCliCommand(START);
