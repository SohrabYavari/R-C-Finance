import React from "react";
import { TestDataCompany } from "../Table/TestData";

interface Props {}

const data = TestDataCompany[0];

type Company = typeof data;

const config = [
  {
    label: "Company Name",
    render: (company: Company) => company.companyName,
    subTitle: "This is the company name",
  },
];

const RatioTile = (props: Props) => {
  const renderedCells = config.map((row) => {
    return (
      <li className="py-3 sm:py-4 list-none">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-grey-900 truncate">
              {row.label}
            </p>
            <p className="text-sm font-medium text-grey-900 truncate">
              {row.subTitle}
            </p>
          </div>
        </div>
      </li>
    );
  });

  const renderedData = config.map((row) => {
    return (
      <div className="text-base font-semibold text-grey-900">
        {row.render(data)}
      </div>
    );
  });

  return (
    <>
      <div className="card bg-white shadow rounded-lg mt-4 mb-4 md:w-96 sm:w-48 ">
        <div className="card-body flex-row items-center gap-16">
          <h2 className="card-title">{renderedCells}</h2>
          <div>{renderedData}</div>
        </div>
      </div>
    </>
  );
};

export default RatioTile;
