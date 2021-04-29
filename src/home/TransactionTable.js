import React from "react";
import { Table } from "react-bootstrap";
const TransactionTable = () => {
  const data = [
    {
      date: "date1",
      name: "name1",
      type: "outcome",
      category: "categry1",
      price: 123,
    },
    {
      date: "date2",
      name: "name2",
      type: "income",
      category: "categry2",
      price: 321,
    },
  ];

  const populateTable = (transactions) => {
    return (
      <tbody>
        {console.log(transactions)}
        {transactions.map((t) => {
          return (
            <tr>
              <td>{t.date}</td>
              <td>{t.name}</td> <td>{t.type}</td>
              <td>{t.category}</td>
              <td>{t.price}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  const getTransactionsData = () => {
    return populateTable(data);
  };

  return (
    <Table responsive striped hover variant="dark" className="table">
      <thead>
        <tr>
          <th colSpan="4">Transactions</th>
        </tr>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Type</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      {getTransactionsData()}
    </Table>
  );
};

export default TransactionTable;
