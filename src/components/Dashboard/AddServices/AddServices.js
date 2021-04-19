import { Box, Button, Typography } from "@material-ui/core";
import axios from 'axios';
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AddServices.css";
function AddServices() {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: ""
  });
  const formClear = () => {
    setValues({
      title: "",
      description: "",
      price: ''
    });
  };

  const handleChange = (e) => {
    const value = { ...values };
    value[e.target.name] = e.target.value;
    setValues(value);
  };
  const handleImage = (e) => {
    const imageData = new FormData();
    imageData.set("key", "9874c6604e213e7efec75a0aadac6f74");
    imageData.append("image", e.target.files[0]);
    axios.post(`https://api.imgbb.com/1/upload`, imageData).then((result) => {
      setImage(result.data.data.display_url);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formClear();
    const fieldData = { ...values };
    fieldData.imageUrl = image;
    fetch(`https://whispering-garden-49450.herokuapp.com/item`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fieldData),
    })
      .then((result) => {
        console.log(result);
        setMessage("Product Insert Successfully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="serviceWrapped">
      <Container>
        <Row>
          <Col>
            <Box>
              <Typography variant="h4">Add Service</Typography>
            </Box>
          </Col>
        </Row>
        <div className="addServicesField">
          {message && (
            <h6 class="alert alert-success" role="alert">
              {message}
            </h6>
          )}
          <form action="/createItem" method="post" onSubmit={handleSubmit}>
            <Row>
              <Col>
                <label htmlFor="servicesTitle">Service Title</label>
                <input
                  type="text"
                  className="form-control input"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Services Title..."
                  required
                />
              </Col>
              <Col>
                <label htmlFor="uploadImage">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImage}
                  className="form-control input"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
              <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className="form-control input"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Services Price..."
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  placeholder="Write Description"
                  className="form-control input"
                  value={values.description}
                  onChange={handleChange}
                  cols="30"
                  rows="5"
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

export default AddServices;
