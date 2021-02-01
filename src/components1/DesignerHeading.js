import React from "react";
import "./trending.css";
import Test from "./test";
import Card from "./card";

function trending(props) {
  return (
    <div className="heading">
      <div className="title_wrapper">
        <svg
          width="100"
          height="100"
          viewBox="0 0 237 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.0644101"
            y="2.25559"
            width="92.1513"
            height="84.4655"
            transform="matrix(0.680171 0.733053 -0.637231 0.770673 57.1937 0.470052)"
            stroke="#8D12D9"
            stroke-width="9"
          />
          <rect
            x="0.0644101"
            y="2.25559"
            width="92.1513"
            height="84.4655"
            transform="matrix(0.680171 0.733053 -0.637231 0.770673 173.194 3.47005)"
            stroke="#8D12D9"
            stroke-width="9"
          />
          <rect
            x="0.0644101"
            y="2.25559"
            width="92.1513"
            height="84.4655"
            transform="matrix(0.680171 0.733053 -0.637231 0.770673 117.528 1.47005)"
            stroke="#8D12D9"
            stroke-width="9"
          />
        </svg>
        <div className="line"></div>
        <h1 className="text1">{props.name}</h1>
        <div className="line"></div>
        <svg
          width="100"
          height="100"
          viewBox="0 0 237 141"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.0644101"
            y="2.25559"
            width="92.1513"
            height="84.4655"
            transform="matrix(0.680171 0.733053 -0.637231 0.770673 57.1937 0.470052)"
            stroke="#8D12D9"
            stroke-width="9"
          />
          <rect
            x="0.0644101"
            y="2.25559"
            width="92.1513"
            height="84.4655"
            transform="matrix(0.680171 0.733053 -0.637231 0.770673 173.194 3.47005)"
            stroke="#8D12D9"
            stroke-width="9"
          />
          <rect
            x="0.0644101"
            y="2.25559"
            width="92.1513"
            height="84.4655"
            transform="matrix(0.680171 0.733053 -0.637231 0.770673 117.528 1.47005)"
            stroke="#8D12D9"
            stroke-width="9"
          />
        </svg>
      </div>
      {/* <Card /> */}
    </div>
  );
}

trending.defaultProps = {
  name: "Products",
};

export default trending;