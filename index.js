'use strict';

var bindexOf = require('bindexof');

function separatorEmpty(buffer) {
  var res = [];
  for (var i = 0; i < buffer.length; i++) {
    res.push(buffer[i]);
  }
  return res;
}

module.exports = splitter;

function splitter(buffer, separator) {
  if (typeof separator === 'undefined') {
    // separator is undefined then return all buffer
    // in a single array
    return [buffer];
  } else if (!separator.length) {
    // 'separator is an empty buffer, is gonna to split
    // the buffer in single buffers, like split(\'\')
    // and return an array
    return separatorEmpty(buffer);
  } else {
    var index = 0;
    var res   = [];
    var find  = 0;

    while ((find = bindexOf(buffer, separator, index)) > -1) {
      res.push(buffer.slice(index, find));
      index = find + separator.length;
    }

    res.push(buffer.slice(index));
    return res;
  }
}
