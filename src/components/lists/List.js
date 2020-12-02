import React from "react";
import Company from "./Company";

const List = () => {
  const companies = [
    { id: 1, name: "TCS" },
    { id: 2, name: "INFO" },
    { id: 3, name: "HCL" }
  ];
  const colors = ["red", "green", "blue"];
  let companiesList = companies.map(company => (
    <Company key={company.id} company={company} />
  ));
  //list with index as key
  //only use when list is static, list should not update or sort or filter.
  let colorList = colors.map((color, index) => (
    <span key={index} style={{ color: color }}>
      {color}
    </span>
  ));
  return (
    <>
      <div>{companiesList}</div>
      <div>{colorList}</div>
    </>
  );
};

export default List;
