import React from "react";
function Table({ transactions }) {
  //the table format
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      {transactions.map((transaction) => (
      <tbody key={transaction.id}>

          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
      </tbody>
      ))}
    </table>
  );
}
export default Table;
