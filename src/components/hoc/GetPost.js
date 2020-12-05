import React from "react";
import withGetData from "./withGetData";

const GetPost = ({ data }) => {
  return (
    <div>
      <h1>First Post</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default withGetData(GetPost, "posts", 1);
