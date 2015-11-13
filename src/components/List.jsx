import React from "react";

var List = React.createClass({

  render : function() {
    var todos = this.props.todos.map(function(value, index){
      return <li className='list-group-item' key={index}>
        {(index+1)+"." + " " + value} </li>
    });
    return (
      <ul className='list-group'> <h3> Stuff to do: </h3>
        {todos}
      </ul>
    )
  }
})

export default List;