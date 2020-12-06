import React, { Component } from 'react'
import AllUsers from './component/all-users/AllUsers';

export default class App extends Component {
 
 state = { flag : false }
 
  test = () =>{

  this.setState({flag : !this.state.flag});
   console.log("test me", this.state.flag);
 
  };
 
 
 
 
 render() {
    return (
      <div>
        <button onClick = {this.test}> click me {this.state.flag.toString()} </button>

<AllUsers/>















      </div>
    )
  }
}
