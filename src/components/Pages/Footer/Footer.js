import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerWrapped">
      <Container>
        <Row>
          <Col md={12}>
            <div className="footer p-3 text-center">
              <footer>
                Copyright © {new Date().getFullYear()} - All Right Reserved By
                {" "}<Link to="/">Gadget Repair</Link>
              </footer>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
