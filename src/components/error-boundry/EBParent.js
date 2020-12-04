import React from "react";
import Player from "./Player";
import ErrorBoundry from "./ErrorBoundry";

const EBParent = () => {
  return (
    <div>
      <ErrorBoundry>
        <Player name="Sachin" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Player name="Virat" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Player name="Ramesh" />
      </ErrorBoundry>
    </div>
  );
};

export default EBParent;
