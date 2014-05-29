# buffer-splitter

<a href="https://nodei.co/npm/buffer-splitter/"><img src="https://nodei.co/npm/buffer-splitter.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/buffer-splitter.png?branch=master)](https://travis-ci.org/joaquimserafim/buffer-splitter)


####summary

The buffer-splitter method returns the new array.

When found, separator is removed from the buffer and the subbuffers are returned in an array. If separator is omitted, the array contains one element consisting of the entire buffer. If separator is an empty buffer, buffer is converted to an array of single buffers.


**Case-sensitivity:** The `buffer-splitter` is case sensitive.


**V1**

####app

	var bsplitter = require('buffer-splitter')
	
	bsplitter(buffer, buffer_separator)
	

####example

	var bsplitter = require('buffer-splitter');
	
	var buffer = new Buffer('Node.js is a software platform for scalable server-side and networking applications.');
	
	var separator = new Buffer('a');
	
	var res = bsplitter();
	console.log(res);
		
	[
		<Buffer 4e 6f 64 65 2e 6a 73 20 69 73 20>,
		<Buffer 20 73 6f 66 74 77>,
		<Buffer 72 65 20 70 6c>,
		<Buffer 74 66 6f 72 6d 20 66 6f 72 20 73 63>,
		<Buffer 6c>,
		<Buffer 62 6c 65 20 73 65 72 76 65 72 2d 73 69 64 65 20>,
		<Buffer 6e 64 20 6e 65 74 77 6f 72 6b 69 6e 67 20>,
		<Buffer 70 70 6c 69 63i>,
		<Buffer 74 69 6f 6e 73 2e>
	]	
  	
  	
an example with the `separator` empty

	var bsplitter = require('buffer-splitter');
	var buffer = new Buffer('Hello World!');
	
	var res = bsplitter(buffer, new Buffer(''));
	console.log(res);
								
	[ <Buffer 48>,
	  <Buffer 65>,
	  <Buffer 6c>,
	  <Buffer 6c>,
	  <Buffer 6f>,
	  <Buffer 20>,
	  <Buffer 57>,
	  <Buffer 6f>,
	  <Buffer 72>,
	  <Buffer 6c>,
	  <Buffer 64>,
	  <Buffer 21> ]
	
