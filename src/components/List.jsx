import React from "react";

var List = React.createClass({

  render : function() {
    console.log(this.props)
    return (
      <ul className='list-group'> <h3> Stuff to do: </h3>
      </ul>
    )
  }
})

export default List;