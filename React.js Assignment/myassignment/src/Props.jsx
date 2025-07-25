import React, { Component } from 'react'

class Props extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "sunil",
      age: 22,
      located: this.props.location
    }
  }
  render() {
    return (
      <>
        <div>
          <h1>My name is {this.state.name}</h1>
          <h1>My age is {this.state.age}</h1>
          <h1>I live in  {this.state.located}</h1>
        </div>
        <hr />
      </>
    )
  }
}

export default Props
