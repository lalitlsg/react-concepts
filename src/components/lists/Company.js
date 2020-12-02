import React from "react";
import styled from "styled-components";

const CompaniesContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightblue;
  margin: 10px auto;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Company = ({ company }) => {
  return <CompaniesContainer>{company.name}</CompaniesContainer>;
};

export default Company;
