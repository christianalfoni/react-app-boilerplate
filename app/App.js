/** @jsx React.DOM */
var React = require('react');
	
var App = React.createClass({
	turnOn: function () {
		AppDispatcher.reset(true);
	},
	turnOff: function () {
		AppDispatcher.reset(false);
	},
	render: function() {
		return (
			<h1>Hello world!</h1>
		);
	}
	
});
	
module.exports = App;
