let connection;

const setupInput = function(conn) {
  connection = conn; // we will use the conn object returned by the connect function to write to the server in handleUserInput().
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin; // the stdin object that is returned to us allows us to listen for keyboard events and handle them.
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Exiting game.');
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
};

module.exports = { setupInput };