import React from "react";
import Company from "./Company";

const List = () => {
  const companies = [
    { id: 1, name: "TCS" },
    { id: 2, name: "INFO" },
    { id: 3, name: "HCL" }
  ];
  let companiesList = companies.map(company => (
    <Company key={company.id} company={company} />
  ));
  return <div>{companiesList}</div>;
};

export default List;
