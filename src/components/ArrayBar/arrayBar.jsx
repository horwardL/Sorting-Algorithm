import React, { Component } from "react";

import "./arrayBar.css";

const PRIMARY_COLOR = "white";

export default class ArrayBar extends Component {
  render() {
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
