import React from "react";

function JSXExample() {
  //   return (
  //     <div>
  //       <h1>JSX Example</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { id: "title", className: "head" }, "JSXExample")
  );
}

export default JSXExample;
