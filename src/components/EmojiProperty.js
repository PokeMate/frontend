import React from "react";

export default function EmojiProperty({ emoji, property, value }) {
  return (
    <div>
      <p style={leftText}>
        <span role="img" aria-label="house">
          {emoji}
        </span>
        <span> {property}</span>
        <span style={rightText}>{value}</span>
      </p>
    </div>
  );
}

const leftText = {
  textAlign: "left",
};

const rightText = {
  float: "right",
};
