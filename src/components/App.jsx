import React from 'react';
import Textbox from './Textbox.jsx'
 

var App = React.createClass({

  render : function (){
    return (
      <div>
        <h1>Todo List </h1>
        <Textbox/>
      </div>
    )
  }
})

export default App;