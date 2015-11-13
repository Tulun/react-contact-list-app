import React from 'react';
global.jQuery = require('jquery');
require('bootstrap')

var Col = React.createClass({

  render : function() {
    var size = this.props.size;
    return (
      <div className={'col-md-'+ size}>
        {this.props.children}
      </div>
    )
  }
});

export default Col;