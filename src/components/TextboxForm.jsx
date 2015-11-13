import React from 'react';


var TextboxForm = React.createClass({

  getInitialState: function() {
    return {value: "Item Todo!"}
  },

  handleChange: function(event) {
    this.setState({value: event.target.value.substr(0,140)});
  },

  render : function () {    
    var value = this.state.value;
    var sizeColTextbox = this.props.sizeColTextbox;
    var sizeColButton = this.props.sizeColButton;
    var buttonName = this.props.buttonName;
    return (
      <div className='form-group'>
        <div className={'col-md-' + sizeColTextbox}>
          <input type="text" className='form-control' value={value} onChange={this.handleChange} onSubmit={this.createTodo}> </input>
        </div>
        <div className={'col-md-' + sizeColButton}>
          <button className ='btn btn-default'> {buttonName} </button>
        </div>
      </div>
    )
  }
});

export default TextboxForm;