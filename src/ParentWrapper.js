import React, { Component } from "react";
import SquareBox from "./SquareBox";

const box = "";

class ParentWrapper extends Component {
  state = {
    bgcolor: "red",
  };
  constructor(props) {
    super(props);
  }

  handleColor = (e) => {
    e.preventDefault();
    let { bgcolor } = this.state;
    if (bgcolor === "red") {
      bgcolor = "black";
    } else {
      bgcolor = "red";
    }
    this.setState({ bgcolor });
  };

  render() {
    let { maxSize, step } = this.props;
    let bor = step / 10;
    maxSize = maxSize + 2 * bor;
    step = step + bor;
    let nestedBox = <SquareBox size={2 * step} color={this.state.bgcolor} />;
    for (let i = 4 * step; i <= maxSize; i = i + 2 * step) {
      nestedBox = (
        <div
          className="sqaureBox"
          style={{
            height: i + "px",
            width: i + "px",
            border: `${bor}px solid black`,
          }}
          onClick={(e) => this.handleColor(e)}
        >
          {nestedBox}
        </div>
      );
    }
    return (
      <>
        <div className="sqaureBoxOuter">{nestedBox}</div>
      </>
    );
  }
}

export default ParentWrapper;
