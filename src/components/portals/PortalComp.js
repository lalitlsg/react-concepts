import React from "react";
import ReactDOM from "react-dom";

const PortalComp = () => {
  return ReactDOM.createPortal(
    <div>Portal Component</div>,
    document.getElementById("portal-root")
  );
};

export default PortalComp;
