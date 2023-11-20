import React, { Component } from 'react'

export default class StateClassComponent extends Component {
  
  state={
    count:0,
  };
  handleIncrement=()=>{
    this.setState({count:this.state.count+1});
  }
  render(){
     return(
        <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.handleIncrement}>Increment</button>
        </div>
     );
  }
}