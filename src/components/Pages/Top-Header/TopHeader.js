import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiOutlineFieldTime,
  AiOutlineMail,
  AiTwotonePhone
} from "react-icons/ai";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLocationArrow,
  FaTwitter
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TopHeader.css";
const TopHeader = () => {
  return (
    <div className="topHeader">
      <Container>
        <Row>
          <Col md={3} className="borderRight">
            <div className="item">
              <span>
                {" "}
                <AiOutlineMail />{" "}
              </span>{" "}
              suport@gadgetrepair.com
            </div>
          </Col>
          <Col md={3} className="borderRight">
            <div className="item">
              <span>
                {" "}
                <AiTwotonePhone />{" "}
              </span>{" "}
              (+880)1700000000
            </div>
          </Col>
          <Col md={4} className="borderRight">
            <div className="item">
              <div className="d-flex align-items-center justify-content-between">
                <div className="location">
                  <span>
                    {" "}
                    <FaLocationArrow />{" "}
                  </span>{" "}
                  Natore,Uttara Ganabhaban
                </div>
                <div className="time">
                  <span>
                    {" "}
                    <AiOutlineFieldTime />{" "}
                  </span>{" "}
                  7am - 9pm
                </div>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="item" style={{ textAlign: "end" }}>
              <Link>
                <span>
                  {" "}
                  <FaFacebook />{" "}
                </span>
              </Link>
              <Link>
                <span>
                  {" "}
                  <FaTwitter />{" "}
                </span>
              </Link>
              <Link>
                <span>
                  {" "}
                  <FaGoogle />{" "}
                </span>
              </Link>
              <Link>
                <span>
                  {" "}
                  <FaInstagram />{" "}
                </span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
