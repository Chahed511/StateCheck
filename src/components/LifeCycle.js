import React, { Component } from "react";
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {

      date: new Date(),
      time :0 
		};

    };
  /*DidMount {this.state.time++}*/
  componentDidMount() {
    alert("component is mounted");
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
// componentDidUpdate
componentDidUpdate(prevprops, prevstate) {
  console.log("Component did update")
  console.log(prevprops, prevstate)
}
tick() {
  this.setState({
    date: new Date()
  });
}




  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()} </h2>;
  }
}

export default LifeCycle;
