import React from "react";
import ReactVivus from "react-vivus";
import svg from "../resources/title.svg";

const MySvgTitle = () => (
  <ReactVivus
    id="title"
    option={{
      file: svg,
      animTimingFunction: "EASE",
      type: "oneByOne",
      onReady: console.log,
    }}
    style={{ height: "100px", width: "100px" }}
    callback={console.log}
  />
);

export default MySvgTitle;
