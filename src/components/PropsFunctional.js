import React from "react";

function PropsFunctional({ name, children }) {
  return (
    <div>
      {children} {name}
    </div>
  );
}

export default PropsFunctional;
