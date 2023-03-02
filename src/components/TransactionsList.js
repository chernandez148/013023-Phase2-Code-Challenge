import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ bankStatement, searchStatement }) {
  const searchResults = bankStatement.filter((statement) => {
    return statement.description
      .toLowerCase()
      .includes(searchStatement.toLowerCase());
  });

  const RenderStatementInfo = searchResults.map((statementInfo) => {
    return <Transaction key={statementInfo.id} statementInfo={statementInfo} />;
  });
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {RenderStatementInfo}
      </tbody>
    </table>
  );
}

export default TransactionsList;
