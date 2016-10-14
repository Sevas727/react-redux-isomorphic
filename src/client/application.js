import 'babel-polyfill'
// import language       from '../common/language'
// import React          from 'react'
// import ReactDOM       from 'react-dom'
import {render} from 'react-isomorphic-render/redux'
import common from './react-isomorphic-render'
require('../../assets/styles/style.scss')
// renders the webpage on the client side
render({
	development: _development_, //eslint-disable-line no-undef
	devtools: _development_tools_ ? require('./devtools') : false //eslint-disable-line no-undef
},common)