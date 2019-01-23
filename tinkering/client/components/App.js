import React, { Component } from "react";
import MouseTracker from "./MouseTracker";

class App extends Component {
  render() {
    return (
      <MouseTracker
        render={({ x, y }) => (
          <p>
            The current mouse position is ({x}, {y})
          </p>
        )}
      />
    );
  }
}

export default App;
