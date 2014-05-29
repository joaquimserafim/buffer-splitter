var search = require('buffer-search');



function separatorEmpty (buffer) {
  var res = [];

  for (var i = 0; i < buffer.length; i++)
    res.push(buffer.slice(i, i + 1));

  return res;
}

module.exports = splitter;

function splitter (buffer, separator) {
  // separator undefined return all buffer in a
  // single array
  if (typeof separator === undefined) return res[buffer];
  // 'separator is an empty buffer, is gonna to split
  // the buffer in single buffers, like split(\'\')
  // and return an array
  if (!separator.length) return separatorEmpty(buffer);

  var index = 0;
  var res = [];
  var find = 0;

  while ((find = search(buffer, separator, index)) > -1) {
    res.push(buffer.slice(index, find));
    index = find + separator.length;
  }
  res.push(buffer.slice(index));
  return res;
}
