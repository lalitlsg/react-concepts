import React from "react";

const MethodProp = ({ showMsg }) => {
  return (
    <div>
      <button onClick={() => showMsg("childman")}>click child</button>
    </div>
  );
};

export default MethodProp;
