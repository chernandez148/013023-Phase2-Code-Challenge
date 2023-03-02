import React from "react";

function Transaction({ statementInfo, deleteTransaction }) {
  return (
    <tr>
      <td>{statementInfo.date}</td>
      <td>{statementInfo.description}</td>
      <td>{statementInfo.category}</td>
      <td>${statementInfo.amount}</td>
      <td
        className="delete"
        onClick={() => deleteTransaction(statementInfo.id)}
      >
        🗑️
      </td>
    </tr>
  );
}

export default Transaction;
