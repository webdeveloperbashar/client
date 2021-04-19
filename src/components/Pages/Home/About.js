import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
const About = () => {
  return (
    <div className="AboutWrapped">
      <Container>
        <Row>
          <Col md={12}>
            <div className="heading title">
              <h5>Know About Gadget Repair</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div className="aboutContent">
              <div className="aboutTitle">
                <h2>IT Services and Gadget Repair Since 1990</h2>
              </div>
              <div className="aboutContent">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique saepe quos dolores, quisquam inventore rem ullam
                  voluptatibus tempore illum nam nihil ratione id labore
                  possimus amet dolorum recusandae rerum veniam?
                </p>
              </div>
              <div className="button">
                <Link to="/">Learn More</Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="aboutImage">
              <img src="https://i.ibb.co/nCsgsXM/repair-2.jpg" className="img-fluid" alt="repair" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="shape">
        <div className="left-lottie">
          <img src="https://i.ibb.co/qx7XRsf/shape-2.png" className="img-fluid" alt="shape" />
        </div>
        <div className="right-lottie">
          <img src="https://i.ibb.co/kSm3pjP/shape-3.png" className="img-fluid" alt="shape" />
        </div>
      </div>
    </div>
  );
};

export default About;
