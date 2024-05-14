import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from './../Portfolio/AddPortfolio/AddPortfolio'
import { Link } from "react-router-dom";

interface Props {
  id: string,
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate
}: Props): JSX.Element => {
  return (
    <div key={id} id={id} className="card w-96 bg-secondary flex flex-row">
      <div>
        <figure className="w-24 h-24 mt-7 ml-3 rounded-full bg-black flex flex-center justify-center justify-items-center items-center">
          <img
            alt="company logo"
          />
        </figure>
      </div>
      <div className="card-body ">
        <Link to={`/company/${searchResult.symbol}`} className="card-title">{searchResult.symbol} ({searchResult.name})</Link>
        <p>{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
        <div className="card-actions justify-end">
          <div className="bg-primary w-14 text-center rounded-full text-black font-bold ">{searchResult.currency}</div>
          <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
        </div>

      </div>
    </div>
  );
};

export default Card;
