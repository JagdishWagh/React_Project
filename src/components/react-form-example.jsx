import React, { Component } from "react";

class InputFormExample extends Component {
  state = { inputValue: "" };
  render() {
    return (
      <div>
        <div className="text-center">
          <span style={{ fontSize: 26 }}>Check for even or odd number</span>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="form-group">
              {/* <label>Enter the number</label> */}
              <input
                type="text"
                className="form-control"
                value={this.state.inputValue}
                onChange={this.onValueChange}
                placeholder="Enter the number"
              />
            </div>
          </div>
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={this.checkForEvenOrOdd}
            >
              Check
            </button>
          </div>
        </div>
        <div id="result"/>
      </div>
    );
  }

  onValueChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  checkForEvenOrOdd = () => {
    // const result =
    //   this.state.inputValue % 2 === 0 ? "Even number" : "Odd number";
    let result;
    if (this.state.inputValue % 2 === 0) {
      result = "Even number";
      document.getElementById("result").style.color = 'green';
    } else {
      result = "Odd number";
      document.getElementById("result").style.color = 'red';
    }
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.fontSize = 'xx-large';
  };
}

export default InputFormExample;
