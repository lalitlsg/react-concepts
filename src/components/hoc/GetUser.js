import React from "react";
import withGetData from "./withGetData";

const GetUser = ({ data }) => {
  return (
    <div>
      <h1>First User</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default withGetData(GetUser, "users", 2);
