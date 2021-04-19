import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const WhyChoose = () => {
  return (
    <div className="WhyChooseWrapped">
      <Container>
        <Row>
          <Col md={6}>
            <div className="left-content">
              <h5>
                {" "}
                <span>
                  {" "}
                  <IoCheckmarkDoneSharp />{" "}
                </span>{" "}
                Fast & reliable support
              </h5>
              <h5>
                {" "}
                <span>
                  {" "}
                  <IoCheckmarkDoneSharp />{" "}
                </span>{" "}
                Professional business repair services
              </h5>
              <h5>
                {" "}
                <span>
                  {" "}
                  <IoCheckmarkDoneSharp />{" "}
                </span>{" "}
                Recover data that may seem lost
              </h5>
              <h5>
                {" "}
                <span>
                  {" "}
                  <IoCheckmarkDoneSharp />{" "}
                </span>{" "}
                Quick Error Resolution
              </h5>
              <h5>
                {" "}
                <span>
                  {" "}
                  <IoCheckmarkDoneSharp />{" "}
                </span>{" "}
                Comprehensive data backup solutions
              </h5>
              <h5>
                {" "}
                <span>
                  {" "}
                  <IoCheckmarkDoneSharp />{" "}
                </span>{" "}
                Robust network planning & design
              </h5>
            </div>
          </Col>
          <Col md={6}>
            <div className="right-content">
                <h4>Support 24/7</h4>
                <h2>(+880)17000000</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis distinctio molestias, sapiente ab esse dolorum.</p>
                <div className="button">
                    <Link to="/">
                        Let's Talk
                    </Link>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChoose;
