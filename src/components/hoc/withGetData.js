import React, { useState, useEffect } from "react";
import axios from "axios";

const withGetData = (WrappedComponent, item, no) => {
  let url = "https://jsonplaceholder.typicode.com";
  return () => {
    const [data, setData] = useState({});
    const getData = () => {
      axios
        .get(`${url}/${item}/${no}`)
        .then(resp => {
          setData(resp.data);
        })
        .catch(error => {
          setData(error.message);
        });
    };
    useEffect(() => {
      getData();
    }, []);
    return <WrappedComponent data={data} />;
  };
};

export default withGetData;
