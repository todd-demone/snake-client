// const net = require('net');
const connect = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin; // the stdin object that is returned to us allows us to listen for keyboard events and handle them.
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Exiting game');
    process.exit();
  }
};

connect();
setupInput();