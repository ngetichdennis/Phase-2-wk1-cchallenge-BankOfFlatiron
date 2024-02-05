import React, { useState, useEffect } from "react";
import TableDetails from "./TableDetails";
import Table from "./Table";

function App() {
  //state variables for searchinh and transaction
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  //fetching data from the API ENDPOINT using useEffect
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTransactions(data)

    });
  }, [])
 
  //handle adding new transactions into the state
  function handleAddTransaction(transaction) {
    const transactionAdded = { ...transaction };
    //adding new state to existing state using spread operator
    setTransactions([...transactions, transactionAdded]);
  }
  //Handling the searchBar changes
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  //handling the transaction table filtering according to search input
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Bank Of Flatiron Transaction App</h1>
      <input
        type="text"
        value={search}
        placeholder="search by description"
        onChange={handleSearchChange}
      />
      <TableDetails onAddTransaction={handleAddTransaction} />
      <Table transactions={filteredTransactions} />
    </div>
  );
}
export default App;
