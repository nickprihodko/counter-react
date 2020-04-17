import React, { Component } from "react";
import "./App.css";

import Counter from "./counter";

export default class App extends Component {
  state = {
    value: 0,
  };

  setValue = (e) => {
    let value = this.state.value;

    switch (e.target.textContent) {
      case "Increment":
        value++;
        break;
      case "Decrement":
        value--;
        break;
      case "Reset":
        value = 0;
        break;
      default:
        break;
    }

    this.setState(() => {
      return { value };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1 className="header">Counter</h1>
        <Counter value={this.state.value} setValue={this.setValue} />
      </div>
    );
  }
}
