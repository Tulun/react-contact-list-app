import React from 'react';
global.jQuery = require('jquery');
require('bootstrap')

var Button = React.createClass({
  render : function() {
    var buttonName=this.props.buttonName;
    return (
      <button className ='btn btn-default'> {buttonName} </button>
    )
  }
});

export default Button;