import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AccountBalace from "./AccountBalance";
import TransactionTable from "./TransactionTable";
import "./home.css";
const index = () => {
  return (
    <div>
      <AccountBalace />
      <TransactionTable />
    </div>
  );
};

export default index;
