import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";
const HeroSection = () => {
  return (
    <div className="heroSection">
      <Container>
        <div className="heroContent">
          <Row>
            <Col md={7}>
              <div className="content">
                <div className="title">
                  <h2>We Spacialize In Gadgetes Repair</h2>
                </div>
                <div className="desc">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem assumenda nostrum minus, qui nisi exercitationem
                    quod maxime cumque autem. Eveniet?
                  </p>
                </div>
                <div className="button">
                  <Link to="/">get started now</Link>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="sideImage">
                <img src="https://i.ibb.co/WcLcSYq/Mobile-device-repair-abstract-concept-vector-illustration-Mobile-phone-and-tablet-repair-service-sma.jpg" className="img-fluid" alt="bg" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
