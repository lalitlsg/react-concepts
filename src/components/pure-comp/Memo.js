import React from "react";

const Memo = ({ color }) => {
  console.log("Memo Component");
  return (
    <div>
      <div>Memo Component</div>
      <div>{color}</div>
    </div>
  );
};

export default React.memo(Memo);
