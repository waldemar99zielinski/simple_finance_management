import React from "react";
import { Card } from "react-bootstrap";
import "./home.css";
const AccountBalance = () => {
  const currentBalace = 1000;
  const currency = " USD";
  return (
    <Card bg="dark" text="white" className="card">
      <Card.Header>Current Account Balance</Card.Header>
      <Card.Body>
        <Card.Text className="balance-text">
          {currentBalace}
          {currency}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AccountBalance;
