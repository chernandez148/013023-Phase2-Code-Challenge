import React from "react";

function Search({ setSearchStatement }) {
  const onStatementSearch = (e) => {
    setSearchStatement(e.target.value);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        className="circular search link icon"
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={onStatementSearch}
      />
      <select>
        <option value="filter by">Filter by...</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
    </div>
  );
}

export default Search;
