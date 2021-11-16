const { MESSAGES } = require('./constants');

let connection;

const setupInput = function(conn) {
  // The conn parameter is an object that is created by connection() in client.js.
  // and passed in to setupInput in the play.js file.
  // The object is then assigned to the connection variable.
  // It is used by the event handler function (handleUserInput()) to write to the server.
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  // The stdin object that is returned below allows us to listen for keyboard events and handle them.
  return stdin;
};

//  Event handler function
const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Exiting game.');
    process.exit();
  } else if (key in MESSAGES) {
    connection.write(MESSAGES[key]);
  }
};

module.exports = { setupInput };