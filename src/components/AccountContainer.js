import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const fetchUrl = "http://localhost:8001/transactions";

function AccountContainer() {
  const [bankStatement, setBankStatement] = useState([]);
  const [searchStatement, setSearchStatement] = useState("");
  console.log(bankStatement);
  console.log(searchStatement);

  useEffect(() => {
    fetch(fetchUrl)
      .then((resp) => resp.json())
      .then((bankData) => setBankStatement(bankData));
  }, []);

  const handleNewTransaction = (transaction) => {
    setBankStatement([...bankStatement, transaction]);
  };

  return (
    <div>
      <Search setSearchStatement={setSearchStatement} />
      <AddTransactionForm
        fetchUrl={fetchUrl}
        handleNewTransaction={handleNewTransaction}
      />
      <TransactionsList
        bankStatement={bankStatement}
        searchStatement={searchStatement}
      />
    </div>
  );
}

export default AccountContainer;
