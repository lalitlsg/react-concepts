import React from "react";

function PropsFunctional(props) {
  return (
    <div>
      {props.children} {props.name}
    </div>
  );
}

export default PropsFunctional;
