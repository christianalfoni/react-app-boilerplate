/** @jsx React.DOM */
var expect = require('chai').expect;

describe('App', function() {
  it('has the text Hello world!', function() {
    var React = require('react/addons');
    var App = require('../app/App.js');
    var TestUtils = React.addons.TestUtils;

    var app = TestUtils.renderIntoDocument(
      <App/>
    );

    expect(app.getDOMNode().textContent).to.equal('Hello world!');
  });
});
