import React from "react";

const FetchUser = ({ user, getUser }) => {
  return (
    <div>
      <h1>Fetch User</h1>
      <div>{user ? JSON.stringify(user) : "Loading..."}</div>
      <div>
        <button onClick={() => getUser("users", 2)}>Fetch User</button>
      </div>
    </div>
  );
};

export default FetchUser;
