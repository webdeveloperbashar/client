import { Box, Button, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../../App";
import PaymentProcess from "../Payment/CheckoutForm";
import "./Book.css";
function Book() {
  const { id } = useParams();
  const [loggedIn, setLoggedIn] = useContext(Context);
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/item`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const findEl = dbData.find((el) => el._id === id);
  const [values, setValues] = useState({
    card: "",
    name: "",
    email: "",
    title: "",
    imageUrl: "",
    description: "",
  });
  const handleChange = (e) => {
    const value = { ...values };
    value[e.target.name] = e.target.value;
    setValues(value);
  };
  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    const data = { ...values };
    data.name = loggedIn.displayName;
    data.email = loggedIn.email;
    data.title = findEl?.title;
    data.imageUrl = findEl?.imageUrl;
    data.description = findEl?.description;
    console.log(data);
    fetch(`http://localhost:5000/item/book`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="bookWrapped">
      <Container>
        <Row>
          <Col>
            <Box>
              <Typography variant="h4">Book</Typography>
            </Box>
          </Col>
        </Row>
        <div className="bookField">
          <form className="field" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <input
                  type="text"
                  className="form-control input"
                  name="name"
                  // onChange={handleChange}
                  value={loggedIn.displayName}
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="email"
                  className="form-control input"
                  name="email"
                  // onChange={handleChange}
                  value={loggedIn.email}
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="text"
                  className="form-control input"
                  name="title"
                  // onChange={handleChange}
                  value={findEl?.title}
                  disabled
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="pay">Pay With</label> <br />
                <select onChange={handleChange} name="card" id="card">
                  <option value="Choose Card...">Choose Card...</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="PayPal">PayPal</option>
                </select>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <PaymentProcess />
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={2}>
                <Button type="submit" variant="contained" className="Button">
                  Pay
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Book;
