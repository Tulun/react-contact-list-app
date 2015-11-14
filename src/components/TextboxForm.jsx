import React from 'react';


var TextboxForm = React.createClass({


  render : function () {   
    var value = this.props.value;
    var sizeColTextbox = this.props.sizeColTextbox;
    var sizeColButton = this.props.sizeColButton;
    var buttonName = this.props.buttonName;
    console.log(value)
    return (
      <div className='form-group'>
        <div className={'col-md-' + sizeColTextbox}>
          <input type="text" className='form-control' value={value} onChange={this.props.handleChange}> </input>
        </div>
        <div className={'col-md-' + sizeColButton}>
          <button className ='btn btn-default' onClick={this.props.createTodo}> {buttonName} </button>
        </div>
      </div>
    )
  }
});

export default TextboxForm;