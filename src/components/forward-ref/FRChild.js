import React from "react";

const FRChild = React.forwardRef((props, ref) => {
  return (
    <div>
      <h1>Child Comp</h1>
      <div>
        <input type="text" ref={ref} />
      </div>
    </div>
  );
});

export default FRChild;
