import React from "react";
import { testIncomeStatementData } from "./TestData";

const data = testIncomeStatementData;

interface Props {
  config: any,
  data: any,
}

const Table = ({ config, data}: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr className="hover" key={company.cik}>
        {config.map((val: any) => {
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
