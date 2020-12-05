import React from "react";
import GetPost from "./GetPost";
import GetUser from "./GetUser";

const GetParent = () => {
  return (
    <div>
      <GetPost />
      <hr />
      <GetUser />
    </div>
  );
};

export default GetParent;
