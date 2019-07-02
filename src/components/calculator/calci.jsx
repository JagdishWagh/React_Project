import React, { Component } from "react";
import CalcButton from "./calci-button";
import "./calci.css";

class Calculator extends Component {
  state = {
    calciButtons: [
      {
        type: "numeric",
        value: 1
      },
      {
        type: "numeric",
        value: 2
      },
      {
        type: "numeric",
        value: 3
      },
      {
        type: "numeric",
        value: 4
      },
      {
        type: "numeric",
        value: 5
      },
      {
        type: "numeric",
        value: 6
      },
      {
        type: "numeric",
        value: 7
      },
      {
        type: "numeric",
        value: 8
      },
      {
        type: "numeric",
        value: 9
      },
      {
        type: "numeric",
        value: 0
      },
      {
        type: "operator",
        value: "+"
      },
      {
        type: "operator",
        value: "/"
      },
      {
        type: "operator",
        value: "-"
      },
      {
        type: "operator",
        value: "="
      },
      {
        type: "other",
        value: "C"
      }
    ],

    result: ""
  };
  render() {
    return (
      <div className="card mt-4">
        <div id="calci" className="card-body calc-style text-center">
          <h4 className="card-title">Calculator</h4>
          <div className="row form-group">
            <textarea
              className="form-control"
              value={this.state.result}
              readOnly
            />
          </div>
          <div className="row">
            {this.state.calciButtons.map(button => (
              <div className="col-4" key={button.value}>
                <CalcButton onButtonClick={this.evaluate} value={button} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  evaluate = value => {
    if (
      !this.state.result &&
      (value === "=" || value === "+" || value === "-" || value === "/")
    ) {
        this.setState({ result: "" });
      return;
    }
    switch (value) {
      case "=":
        this.setState({ result: eval(this.state.result) });
        break;
      case "C":
        this.setState({ result: "" });
        break;
      default:
        this.setState({ result: this.state.result + value });
        break;
    }
  };
}

export default Calculator;
