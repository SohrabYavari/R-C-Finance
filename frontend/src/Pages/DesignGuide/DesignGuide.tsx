import React from "react";
import Table from "../../components/Table/Table";
import RatioTile from "../../components/RatioTile/RatioTile";

interface Props {}

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>InvestIQ Designs Guide Page</h1>
      <h2>A comprehensijve guide on the design used in this application.</h2>
      <Table />
      <RatioTile />
    </>
  );
};

export default DesignGuide;
