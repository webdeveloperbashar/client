import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Review.css";
function Review() {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/item/review`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const [values, setValues] = useState({
    name: "",
    company: "",
    description: "",
  });
  const handleChange = (e) => {
    const value = { ...values };
    value[e.target.name] = e.target.value;
    setValues(value);
  };
  const clearForm = () => {
    setValues({
      name: "",
      company: "",
      description: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    fetch(`http://localhost:5000/item/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(() => {
      fetch(`http://localhost:5000/item/review`)
        .then((res) => res.json())
        .then((data) => setDbData(data));
    }).catch(err=>{
      console.log(err.message);
    })
  };
  return (
    <div className="reviewWrapped">
      <Container>
        <Row>
          <Col>
            <Box>
              <Typography variant="h4">Review</Typography>
            </Box>
          </Col>
        </Row>
        <div className="reviewField">
          <form className="field" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <input
                  type="text"
                  className="form-control input"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  value={values.name}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="text"
                  className="form-control input"
                  name="company"
                  placeholder="Company's Name Designation"
                  onChange={handleChange}
                  value={values.company}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea
                  name="description"
                  onChange={handleChange}
                  cols="30"
                  value={values.description}
                  className="form-control input"
                  placeholder="Description"
                  rows="5"
                  required
                ></textarea>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <Button type="submit" variant="contained" className="Button">
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

export default Review;
