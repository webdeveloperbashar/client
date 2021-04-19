import { Box, Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BookList.css";
const BookList = () => {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/item/book`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  return (
    <div className="bookListWrapped">
      <Container>
        <Row>
          <Col>
            <Box>
              <Typography variant="h4">Book List</Typography>
            </Box>
          </Col>
        </Row>
        <div className="bookList">
          <Row>
            {dbData.map((data) => (
              <Col md={6}>
                <div className="item">
                  <div className="img-status d-flex align-items-center justify-content-between">
                    <div>
                      <img
                        src={data.imageUrl}
                        className="img-fluid"
                        alt="pc"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div>
                      <Button className="item-button">Pending</Button>
                    </div>
                  </div>
                  <div className="item-title">
                    <h4>{data.title}</h4>
                  </div>
                  <div className="item-content">
                    <p>
                      {data.description}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BookList;
