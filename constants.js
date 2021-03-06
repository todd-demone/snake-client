const IP = 'localhost';
const PORT = 50541;
const ENCODING = 'utf8';
const INITIALS = 'TCD';
const MESSAGES = {
  g: 'Say: Hello everyone!',
  b: 'Say: Gotta run. Bye!'
};
const MOVEMENTS = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right'
};

module.exports = { IP, PORT, ENCODING, INITIALS, MESSAGES, MOVEMENTS };