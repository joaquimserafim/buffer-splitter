var assert = require('assert');
var bench = require('bench');
var split = require('./');



var text = 'Node.js is a platform built on Chrome\'s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.';

var buffer = new Buffer(text);
var bempty = new Buffer('');
var bchar = new Buffer('a');

exports.compare = {
  'using buffer-splitter - separator empty': function () {
    split(buffer, bempty);
  },
  'using buffer-splitter - split by "a"': function () {
    split(buffer, bchar);
  },
  'using normal string split - separator empty': function () {
    text.split('');
  },
  'using normal string split - split by "a"': function () {
    text.split('a');
  }
};

bench.runMain();
