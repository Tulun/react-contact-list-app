import React from 'react';
import TextboxForm from './TextboxForm.jsx';
import Row from './Row.jsx';
import Col from './Col.jsx';
import List from './List.jsx';
import Button from './Button.jsx';

 

var App = React.createClass({

  getInitialState(){
    return {
      taskField: 'Boobs',
      todos: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  handleChange: function (value) {
    var value = event.target.value;
    this.setState({
      taskField: value
    })
    console.log(value)
  },

  render : function () {
    var todos = this.state.todos
    return (
      <div className='container'>
        <Row>
          <Col size={12}>
            <h1 className='h1'> {"Jason's Todo List"} </h1>
          </Col>
        </Row>
        <Row>
          <TextboxForm sizeColTextbox={11} sizeColButton={1}
           buttonName="Add Todo Item" value={this.state.taskField} />
        </Row>
        <Row>
          <Col size={12}>
            <List todos={todos} />
          </Col>
        </Row>
      </div>
    )
  }
})

export default App;