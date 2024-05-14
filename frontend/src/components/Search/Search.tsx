import React, { ChangeEvent, SyntheticEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  search,
  handleSearchChange,
  onSearchSubmit,
}: Props): JSX.Element => {
  return (
      <form onSubmit={onSearchSubmit} className="input input-bordered flex items-center gap-2 w-10/12 bg-slate-300">
        <strong>Search:</strong>
        <input
          value={search}
          onChange={(e) => handleSearchChange(e)}
          type="text"
          className="grow"
          placeholder="Stocks"
        /> 
      </form>
  );
};

export default Search;
