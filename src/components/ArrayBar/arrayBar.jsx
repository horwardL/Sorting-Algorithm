import React, { Component } from "react";

import "./arrayBar.css";

const PRIMARY_COLOR = "white";

export default class ArrayBar extends Component {
  render() {
    const { array, size } = this.props;
    let screenWidth = window.screen.width;
    let barWidth = screenWidth / (size * 1.5);
    if (screenWidth >= 768) {
      screenWidth -= 244;
      barWidth = (window.screen.width - 444) / (size * 2.3);
    }
    let widthStyle = {
      width: `${screenWidth}px`
    };

    return (
      <div className="arr-container" style={widthStyle}>
        <div className="array" style={widthStyle}>
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{
                width: `${barWidth}px`,
                backgroundColor: PRIMARY_COLOR,
                height: value
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}
