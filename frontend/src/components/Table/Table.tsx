import React from "react";
import { testIncomeStatementData } from "./TestData";

const data = testIncomeStatementData;

interface Props {}

type Company = (typeof data)[0];

const configs = [
  {
    label: "Year",
    render: (company: Company) => company.acceptedDate,
  },
  {
    label: "Cost of Revenue",
    render: (company: Company) => company.costOfRevenue,
  },
];

const Table = (props: Props) => {
  const renderedRows = data.map((company) => {
    return (
      <tr className="hover" key={company.cik}>
        {configs.map((val: any) => {
          return (
            <td className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  const renderedHeaders = data.map((config: any) => {
    return <th key={config.label}>{config.label}</th>;
  });
  return (
    <>
      <div className="overflow-x-auto bg-slate-200">
        <table className="table min-w-full divide-y">
          <thead className="">{renderedHeaders}</thead>
          <tbody>{renderedRows}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
