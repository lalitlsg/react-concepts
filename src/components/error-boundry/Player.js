import React from "react";

const Player = ({ name }) => {
  if (name === "Ramesh") throw new Error("Not a player");
  return <div>{name}</div>;
};

export default Player;
