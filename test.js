var test = require('tape');
var bsplitter = require('./');



test('split some buffers', function (t) {
  t.plan(5);

  var text = new Buffer('Pure JavaScript is Unicode friendly but not nice to binary data.' +
    'When dealing with TCP streams or the file system, it\'s necessary to handle ' +
    'octet streams. Node has several strategies for manipulating, creating, and ' +
    'consuming octet streams.');

  var delim = new Buffer('te');

  t.deepEqual(bsplitter(text, delim).length, 5);
  t.deepEqual(bsplitter(text, new Buffer('oc')).length, 3);
  t.deepEqual(bsplitter(text, new Buffer('the')).length, 2);
  t.deepEqual(bsplitter(text).length, 1, 'the separator is omitted');
  //t.deepEqual(bsplitter(text, new Buffer('')).length, text.length,
              //'separator is an empty buffer, the is gonna to split the buffer in single buffers, like split(\'\')');
});
