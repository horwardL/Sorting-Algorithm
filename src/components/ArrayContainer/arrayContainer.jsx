import React, { Component } from "react";
import { connect } from "react-redux";

import "./arrayContainer.css";

const PRIMARY_COLOR = "white";

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

const mapStateToProps = state => ({
  size: state.array.size,
  array: state.array.array
});

export default connect(mapStateToProps)(ArrayContainer);
