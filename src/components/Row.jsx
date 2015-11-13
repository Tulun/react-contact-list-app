import React from 'react';
global.jQuery = require('jquery');
require('bootstrap')

var Row = React.createClass({

  render : function() {
    return (
      <div className='row'>
        {this.props.children}
      </div>
    )
  }
})

export default Row;