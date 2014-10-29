'use strict';

var tape      = require('tape');
var bsplitter = require('./');

tape('split some buffers', function(assert) {
  var text = 'Pure JavaScript is Unicode friendly but ' +
    'not nice to binary data. When dealing with TCP streams or the' +
    ' file system, it\'s necessary to handle octet streams. Node ' +
    'has several strategies for manipulating, creating, and ' +
    'consuming octet streams.';

  var buff = new Buffer(text);

  var delim = new Buffer('te');

  assert.deepEqual(bsplitter(new Buffer('get:clusters'),
    new Buffer(':')).length, 2);
  assert.deepEqual(bsplitter(buff, delim).length, 5);
  assert.deepEqual(bsplitter(buff, new Buffer('oc')).length, 3);
  assert.deepEqual(bsplitter(buff, new Buffer('the')).length, 2);
  assert.deepEqual(bsplitter(buff).length, 1, 'the separator is omitted');

  var bArray = bsplitter(buff, new Buffer(''));
  var sArray = text.split('');

  assert.equal(bArray.map(function(b) {return new Buffer([b]);}).join(''),
    sArray.join(''));

  assert.deepEqual(bArray.length,
    sArray.length,
    'separator is an empty buffer, is gonna to split the buffer in single ' +
    'buffers just like split("")');

  assert.end();
});
