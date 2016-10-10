// use bluebird for Promises
require('babel-runtime/core-js/promise').default = require('bluebird')

if (_development_)//eslint-disable-line no-undef
{
	require('bluebird').longStackTraces()
}

require('./application')