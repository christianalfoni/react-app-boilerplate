/** @jsx React.DOM */
var React = require('react');
if (DEBUG) {
	window.React = React; // Activates React dev-tools
}

var App = require('./App.js');

React.renderComponent(<App/>, document.body);