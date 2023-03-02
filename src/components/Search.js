import React from "react";

function Search({ setSearchStatement }) {
  const onStatementSearch = (e) => {
    setSearchStatement(e.target.value);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={onStatementSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
