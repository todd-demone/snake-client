const net = require('net');

const {
  IP,
  PORT,
  INITIALS
} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    conn.write(`Name: ${INITIALS}`);
  });
  conn.on('data', (data) => {
    console.log(`Server says: ${data}`);
  });
  conn.on('end', () => {
    console.log('Server has signaled end of transmission.');
    process.exit();
  });
  return conn;
};

module.exports = { connect };