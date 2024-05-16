import React from "react";
import Table from "../../components/Table/Table";
import RatioTile from "../../components/RatioTile/RatioTile";
import { testIncomeStatementData } from "../../components/Table/TestData";
import { TestDataCompany } from '../../components/Table/TestData'

interface Props {}

const data = TestDataCompany;

const tableConfig = [
  {
    label: "symbol",
    render: (company: any) => company.symbol,
  },
];

const tableConfig2 = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];


const DesignGuide = (props: Props) => {
  return (
    <>
      <h1 className="text-4xl font-medium pt-14">InvestIQ Design Guide Page</h1>
      <h2>A comprehensive guide on the design used in this application.</h2>
      <Table data={testIncomeStatementData} config={tableConfig} />
      <RatioTile data={testIncomeStatementData} config={tableConfig2} />
    </>
  );
};

export default DesignGuide;
