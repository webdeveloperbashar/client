import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaLocationArrow
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../image/logo-light.png";
const FooterWidget = () => {
  return (
    <div className="FooterWrapped">
      <Container>
        <Row>
          <Col md={3}>
            <div className="widget">
              <img
                src={logo}
                className="img-fluid"
                alt="logo"
                style={{ width: "160px" }}
              />
              <div className="content">
                <h5>
                  {" "}
                  <span>
                    {" "}
                    <FaLocationArrow />{" "}
                  </span>{" "}
                  Uttara Ganabhaban, Natore
                </h5>
                <h5>
                  {" "}
                  <span>
                    {" "}
                    <AiOutlineMail />{" "}
                  </span>{" "}
                  support@gadgetrepair.com
                </h5>
                <h5>
                  {" "}
                  <span>
                    {" "}
                    <AiTwotonePhone />{" "}
                  </span>{" "}
                  (+880) 123456789
                </h5>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="widget">
              <h4>Quick Links</h4>
              <h6>
                <Link to="/">Home</Link>
              </h6>
              <h6>
                  <Link to="/about">About</Link>
              </h6>
              <h6>
                  <Link to="/services">Services</Link>
              </h6>
              <h6>
                  <Link to="/blog">Blog</Link>
              </h6>
              <h6>
                  <Link to="/contact">Contact</Link>
              </h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="widget">
              <h4>Others Link</h4>
              <h6>
                <Link to="/">Mobile Repair</Link>
              </h6>
              <h6>
                  <Link to="/pc">PC Repair</Link>
              </h6>
              <h6>
                  <Link to="/it">IT Solution</Link>
              </h6>
              <h6>
                  <Link to="/data">Data Protection</Link>
              </h6>
              <h6>
                  <Link to="/backup">Data Backup</Link>
              </h6>
            </div>
          </Col>
          <Col md={3}>
            <div className="widget">
              <h4>Social Link</h4>
              <span> <FaFacebook className="sIcon" /> </span>
              <span> <FaGoogle className="sIcon"/> </span>
              <span> <FaInstagram className="sIcon"/> </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterWidget;
