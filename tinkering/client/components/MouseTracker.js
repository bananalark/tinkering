import React, { Component } from "react";
import App from "./App";
import { videoWidth, nose1, nose2 } from "../../../posenet/demos/camera.js";

class MouseTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    // const x = event.clientX;
    // const y = event.clientY;
    this.setState({ x: nose1, y: nose2 });
  }
  render() {
    return (
      <div className="mouse-tracker" onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default MouseTracker;
