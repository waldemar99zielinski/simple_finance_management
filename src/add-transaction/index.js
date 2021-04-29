import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./add-transaction.css";
const index = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Type</Form.Label>
        <Form.Control as="select">
          <option>Small select</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control as="select">
          <option>Small select</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control type="price" placeholder="Enter price" />
      </Form.Group>
      <Form.Group>
        <Button type="submit" variant="dark">
          Submit
        </Button>
        <Button type="reset" variant="dark" className="bnt-reset">
          Reset
        </Button>
      </Form.Group>
    </Form>
  );
};

export default index;
