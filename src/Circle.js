import React, { Component } from "react";
import "./Circle.css";
class Circle extends Component {
  state = { hover: "no" };
  setRating = () => {
    this.props.setCircleClickedID(this.props.cId);
  };
  render() {
    return (
      <span
        onClick={() => {
          this.setRating();
        }}
        className={`dot-${this.props.circlehigh}`}
      ></span>
    );
  }
}

export default Circle;
