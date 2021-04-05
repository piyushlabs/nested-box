import React, { Component } from "react";

class SquareBox extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    let { size, color } = this.props;
    let bor = size / 10;
    size = size - bor;
    let style = {
      height: size + "px",
      width: size + "px",
      backgroundColor: color,
      border: `${bor}px solid blue`,
    };
    return (
      <>
        <div style={style} className="sqaureBox"></div>
      </>
    );
  }
}

export default SquareBox;
