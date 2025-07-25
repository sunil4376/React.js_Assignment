import React, { Component } from 'react'

class State extends Component {
    constructor(){
        super()
        this.state={
            count:0,
        }
    }
  render() {
    return (
        <>
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>ADD</button>
      </div>
      </>
    )
  }
}

export default State
