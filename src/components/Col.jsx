import React from 'react';

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