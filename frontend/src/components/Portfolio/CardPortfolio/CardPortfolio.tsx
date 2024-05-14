import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div className="card lg:card-side bg-secondary shadow-xl text-center px-9">
      <div className="card-body p-4 w-full flex flex-col items-center justify-center text-center">
        <Link to={`/company/${portfolioValue}`} className="card-title">{portfolioValue}</Link>
        <div className="bg-black rounded-full w-10 h-10">
          <img src=""  alt="CL" className="w-full h-full rounded-full object-center object-cover" />
        </div>
        <DeletePortfolio
          portfolioValue={portfolioValue}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
    </div>
  );
};

export default CardPortfolio;
