const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    conn.write('Name: TCD');
  });
  conn.on('ready', () => {
    console.log('Socket is ready to be used.');
  });
  conn.on('data', (data) => {
    console.log('Data received from server:', data);
  });
  conn.on('end', () => {
    console.log('Server has signaled end of transmission.');
  });
  return conn;
};

module.exports = connect;