import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MakeAdmin.css";
function MakeAdmin() {
  const [values, setValues] = useState({
    admin: "",
  });
  const handleChange = (e) => {
    const value = { ...values };
    value[e.target.name] = e.target.value;
    setValues(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://whispering-garden-49450.herokuapp.com/item/admin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="AdminWrapped">
      <Container>
        <Row>
          <Col>
            <Box>
              <Typography variant="h4">Make Admin</Typography>
            </Box>
          </Col>
        </Row>
        <div className="adminField">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col md={10}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control input"
                  name="admin"
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Admin Email..."
                  required
                />
              </Col>
              <Col md={2}>
                <Button
                  type="submit"
                  variant="contained"
                  className="Buttons"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default MakeAdmin;
