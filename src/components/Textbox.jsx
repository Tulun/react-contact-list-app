import React from 'react';

var Textbox = React.createClass({

  render : function () {
    
    return (
      <form ref="todo-input" className='form-control'>
        <input type="text" className='input-group' value={this.props.value}> </input>
        <button className='btn btn-default'> New Todo Item! </button>
      </form>
    )
  }
});

export default Textbox;