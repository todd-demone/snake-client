const { ENCODING, MESSAGES, MOVEMENTS } = require('./constants');

// Stores the active TCP connection object
let connection;
let intervalId;
const speed = 120;

/**
 * Allows our client to listen for keyboard input and react to it.
 * @param {Object} conn - An object representing a connection made with the server. It contains the .write() method, which allows us to send messages to the server based on the keyboard input.
 * @returns {Object} stdin - Returns a `process.stdin` object, which allows us to listen for keyboard input and react to it.
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

/**
 * The `data` callback handler for the `stdin` object in setupInput().
 * @param {string} key The key pressed by the user and received by stdin.
 */
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Exited game.');
    process.exit();
  } else if (key in MESSAGES) {
    connection.write(MESSAGES[key]);
  } else if (key in MOVEMENTS) {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(
      () => {
        connection.write(MOVEMENTS[key]);
      },
      speed);
  }
};

module.exports = { setupInput };