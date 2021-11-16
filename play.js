const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('connect event');
  });
  conn.on('ready', () => {
    console.log('ready event');
  });
  conn.on('data', (data) => {
    console.log('data event:', data);
  });
  conn.on('timeout', () => {
    console.log('timeout event');
  });
  conn.on('end', () => {
    console.log('end event');
  });
  return conn;
};

console.log('Connecting...');
connect();
console.log('after call to connect function');