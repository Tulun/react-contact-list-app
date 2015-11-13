import React from 'react';

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