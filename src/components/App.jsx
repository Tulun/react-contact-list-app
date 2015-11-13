import React from 'react';
import Textbox from './Textbox.jsx';
import Row from './Row.jsx';
import Col from './Col.jsx';
 

var App = React.createClass({

  render : function (){
    return (
      <div className='container'>
        <Row>
          <Col size={6}>
            <h1>Todo List </h1>
          </Col>
          <Col size={6}>
            <Textbox/>
          </Col>
        </Row>
      </div>
    )
  }
})

export default App;