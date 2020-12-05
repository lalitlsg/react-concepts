import React from "react";

const FetchPost = ({ post, getPost }) => {
  return (
    <div>
      <h1>Fetch Post</h1>
      <div>{post ? JSON.stringify(post) : "Loading..."}</div>
      <div>
        <button onClick={() => getPost("posts", 1)}>Fetch Post</button>
      </div>
    </div>
  );
};

export default FetchPost;
