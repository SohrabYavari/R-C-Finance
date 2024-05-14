import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import CardList from "./../../components/CardList/CardList";
import Search from "./../../components/Search/Search";
import PortfolioList from "./../../components/Portfolio/PortfolioList/PortfolioList";
import { CompanySearch } from "./../../company";
import { searchCompanies } from "./../../api";
interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);
  };

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };
  return (
    <div className="container w-full flex flex-col items-center justify-center gap-y-5">
      <Search
        search={search}
        onSearchSubmit={onSearchSubmit}
        handleSearchChange={handleSearchChange}
      />

      <PortfolioList
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />

      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />

      {serverError && <h1>{serverError}</h1>}
    </div>
  );
};

export default SearchPage;
