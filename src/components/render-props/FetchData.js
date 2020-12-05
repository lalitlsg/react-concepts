import React, { useState } from "react";
import axios from "axios";

const FetchData = ({ render }) => {
  const [data, setData] = useState();
  let url = "https://jsonplaceholder.typicode.com";
  const getData = (item, no) => {
    axios
      .get(`${url}/${item}/${no}`)
      .then(resp => {
        setData(resp.data);
      })
      .catch(error => {
        setData(error.message);
      });
  };

  return <div>{render(data, getData)}</div>;
};

export default FetchData;
