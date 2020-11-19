import React from "react";

//destructuring props
function PropsFunctional({ name, children }) {
  return (
    <div>
      {children} {name}
    </div>
  );
}

export default PropsFunctional;
