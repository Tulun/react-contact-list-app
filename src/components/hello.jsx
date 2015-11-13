import React from 'react';
 
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello</h1>
//   }
// }

var Hello = React.createClass({

  render : function (){
    return (
      <h1> Hello, World </h1>
    )
  }
})

export default Hello;