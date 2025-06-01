import React from "react";
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div id="preloader-gif"></div>
    </div>
  );
}

export default Pre;
