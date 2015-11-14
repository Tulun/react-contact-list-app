import React from 'react';
import TextboxForm from './TextboxForm.jsx';
import Row from './Row.jsx';
import Col from './Col.jsx';
import List from './List.jsx';
// import Button from './Button.jsx';

 

var App = React.createClass({

  getInitialState(){
    return {
      taskField: '',
      todos: ['Item 1', 'Item 2', 'Item 3']
    }
  },
  handleChange: function(event){
    this.setState({
      taskField: event.target.value.substr(0,140)
    })
  },
  createTodo: function() {
    if (!(this.state.taskField === '')) {
      this.setState({
        todos: this.state.todos.concat(this.state.taskField),
        taskField: ''
      })
    }
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
           buttonName="Add Todo Item" handleChange={this.handleChange} value={this.state.taskField}
           createTodo={this.createTodo} />
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