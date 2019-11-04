import React, { Component } from "react";
import { connect } from "react-redux";

import "./arrayContainer.css";

const PRIMARY_COLOR = ["white", "black"];

class ArrayContainer extends Component {
  render() {
    const { array, size } = this.props;
    let screenWidth = window.screen.width;
    let barWidth = Math.floor(screenWidth / (size * 1.5));
    if (screenWidth >= 768) {
      screenWidth -= 244;
      barWidth = Math.floor((window.screen.width - 444) / (size * 2.3));
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
              id={`array-bar-${index}`}
              key={index}
              style={{
                width: `${barWidth}px`,
                backgroundColor:
                  PRIMARY_COLOR[this.props.shape === "bar" ? 0 : 1],
                height: value
              }}
            >
              <div
                className="dot"
                id={`array-dot-${index}`}
                style={{
                  height: `${barWidth}px`,
                  width: `${barWidth}px`,
                  backgroundColor: PRIMARY_COLOR[0]
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  size: state.array.size,
  array: state.array.array,
  shape: state.shape
});

export default connect(mapStateToProps)(ArrayContainer);
