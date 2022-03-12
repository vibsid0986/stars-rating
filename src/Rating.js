import React, { Component } from "react";
import Circle from "./Circle";
import "./Rating.css";

class Rating extends Component {
  state = {
    circleid: -1,
    arr: ["no", "no", "no", "no", "no"],
    circlehighlight1: "no",
    circlehighlight2: "no",
    circlehighlight3: "no",
    circlehighlight4: "no",
    circlehighlight5: "no",
  };

  setCircleClickedID = (clickId) => {
    let arr1 = ["no", "no", "no", "no", "no"];

    for (let index = 0; index <= clickId; index++) {
      arr1[index] = "yes";
    }

    this.setState({ circleid: clickId, arr: arr1 });
    console.log(clickId);
  };
  onSelectHover = (id) => {
    let arr1 = ["no", "no", "no", "no", "no"];
    if (id > this.state.circleid) {
      if (this.state.circleid === -1) {
        for (let index = 0; index <= id; index++) {
          arr1[index] = "yes";
        }
        this.setState({ arr: arr1 });
      } else {
        for (let index = 0; index <= id; index++) {
          arr1[index] = "yes";
        }
        this.setState({ arr: arr1 });
      }
    }
  };

  onRemoveHover = () => {
    let arr1 = ["no", "no", "no", "no", "no"];
    if (this.state.circleid === -1) {
      this.setState({ arr: arr1 });
    } else {
      for (let index = 0; index <= this.state.circleid; index++) {
        arr1[index] = "yes";
      }
      this.setState({ arr: arr1 });
    }
  };

  render() {
    return (
      <div className="eksath">
        <div
          className="middiv"
          onMouseEnter={() => {
            this.onSelectHover(0);
          }}
          onMouseLeave={() => {
            this.onRemoveHover();
          }}
        >
          <Circle
            cId="0"
            setCircleClickedID={this.setCircleClickedID}
            circlehigh={this.state.arr[0]}
          />
        </div>
        <div
          className="middiv"
          onMouseEnter={() => {
            this.onSelectHover(1);
          }}
          onMouseLeave={() => {
            this.onRemoveHover();
          }}
        >
          <Circle
            cId="1"
            setCircleClickedID={this.setCircleClickedID}
            circlehigh={this.state.arr[1]}
          />
        </div>
        <div
          className="middiv"
          onMouseEnter={() => {
            this.onSelectHover(2);
          }}
          onMouseLeave={() => {
            this.onRemoveHover();
          }}
        >
          <Circle
            cId="2"
            setCircleClickedID={this.setCircleClickedID}
            circlehigh={this.state.arr[2]}
          />
        </div>
        <div
          className="middiv"
          onMouseEnter={() => {
            this.onSelectHover(3);
          }}
          onMouseLeave={() => {
            this.onRemoveHover();
          }}
        >
          <Circle
            cId="3"
            setCircleClickedID={this.setCircleClickedID}
            circlehigh={this.state.arr[3]}
          />
        </div>
        <div
          className="middiv"
          onMouseEnter={() => {
            this.onSelectHover(4);
          }}
          onMouseLeave={() => {
            this.onRemoveHover();
          }}
        >
          <Circle
            cId="4"
            setCircleClickedID={this.setCircleClickedID}
            circlehigh={this.state.arr[4]}
          />
        </div>
      </div>
    );
  }
}

export default Rating;
