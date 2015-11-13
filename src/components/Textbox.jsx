import React from 'react';

var Textbox = React.createClass({

  getInitialState: function() {
    return {value: "Item Todo!"}
  },

  handleChange: function(event) {
    this.setState({value: event.target.value.substr(0,140)});
  },

  render : function () {    
    var value = this.state.value;
    return (
      <form ref="todo-input" className='form-control'>
        <input type="text" className='input-group' value={value} onChange={this.handleChange} onSubmit={this.createTodo}> </input>
        <button className='btn btn-default'> New Todo Item! </button>
      </form>
    )
  }
});

export default Textbox;