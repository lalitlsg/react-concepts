import React from "react";
import FetchPost from "./FetchPost";
import FetchUser from "./FetchUser";
import FetchData from "./FetchData";

const RParent = () => {
  return (
    <div>
      <FetchData
        render={(data, getData) => <FetchPost post={data} getPost={getData} />}
      />
      <hr />
      <FetchData
        render={(data, getData) => <FetchUser user={data} getUser={getData} />}
      />
    </div>
  );
};

export default RParent;
