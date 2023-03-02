import React, { useState } from "react";

const initialState = {
  date: "",
  description: "",
  category: "",
  amount: "",
};

function AddTransactionForm({ fetchUrl, handleNewTransaction }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      ...formData,
    };

    fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((resp) => resp.json())
      .then((newTransactionData) => handleNewTransaction(newTransactionData));
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            onChange={handleChange}
            type="date"
            name="date"
            value={formData.date}
          />
          <input
            onChange={handleChange}
            type="text"
            name="description"
            value={FormData.description}
            placeholder="Description"
          />
          <input
            onChange={handleChange}
            type="text"
            name="category"
            value={FormData.category}
            placeholder="Category"
          />
          <input
            onChange={handleChange}
            type="number"
            name="amount"
            value={FormData.amount}
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
