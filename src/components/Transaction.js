import React from "react";

function Transaction({ statementInfo }) {
  return (
    <tr>
      <td>{statementInfo.date}</td>
      <td>{statementInfo.description}</td>
      <td>{statementInfo.category}</td>
      <td>${statementInfo.amount}</td>
    </tr>
  );
}

export default Transaction;
