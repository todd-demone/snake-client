const net = require('net');
const { IP, PORT, ENCODING, INITIALS } = require('./constants');

/**
 * Establishes a connection with the game server.
 * @returns {Object} conn - Returns a connection object, i.e.,  an instance of the class Socket.
 */
const connect = function() {
  const conn = net.createConnection({ host: IP, port: PORT });
  conn.setEncoding(ENCODING);
  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    conn.write(`Name: ${INITIALS}`);
  });
  conn.on('data', (data) => {
    console.log(`Server says ${data}`);
  });
  conn.on('end', () => {
    console.log('Disconnected from game server.');
    process.exit();
  });
  return conn;
};

module.exports = { connect };