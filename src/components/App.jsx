import React from 'react';
import TextboxForm from './TextboxForm.jsx';
import Row from './Row.jsx';
import Col from './Col.jsx';
import Button from './Button.jsx'
global.jQuery = require('jquery');
require('bootstrap')
 

var App = React.createClass({

  render : function (){
    return (
      <div className='container'>
        <Row>
          <Col size={12}>
            <h1> {"Jason's Todo List"} </h1>
          </Col>
        </Row>
        <Row>
          <TextboxForm sizeColTextbox={11} sizeColButton={1} buttonName="Add Todo Item" />
        </Row>
      </div>
    )
  }
})

export default App;