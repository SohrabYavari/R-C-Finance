import React from "react";
import Table from "../../components/Table/Table";
import RatioTile from "../../components/RatioTile/RatioTile";
import { testIncomeStatementData } from "../../components/Table/TestData";

interface Props {}
const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];


const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>InvestIQ Designs Guide Page</h1>
      <h2>A comprehensijve guide on the design used in this application.</h2>
      <Table data={testIncomeStatementData} config={tableConfig} />
      <RatioTile data={testIncomeStatementData} config={tableConfig} />
    </>
  );
};

export default DesignGuide;
