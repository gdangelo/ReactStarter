var React = require('react');

var Hello = React.createClass({
  render: function () {
    return <h1>
      Hello, World!
    </h1>
  }
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
