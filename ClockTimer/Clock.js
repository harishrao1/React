import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  // 1. do not modify state directly
     // this.state.date = new Date()
  
  
  // 2. state Update may be Aysnchronmous
    //  use setState with function arguments rather than objects
    //  first argument --> prevState
    //  second one as props

  //  3.Updates are Merged
  
  //  4.Data flows down
    //   we dont know where the data came from props or state
    //   called -> "top down or Unidirectional Data flow"
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
