import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLocationArrow,
  FaTwitter
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="ContactWrapped">
      <Container>
        <div className="form-wrapped">
          <Row>
            <Col md={5}>
              <div className="contact-us">
                <div className="address">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      {" "}
                      <FaLocationArrow className="icon" /> Natore,Uttara Ganabhaban
                    </li>
                    <li>
                      {" "}
                      <AiOutlineMail className="icon" />  suport@gadgetrepair.com
                    </li>
                    <li>
                      {" "}
                      <AiTwotonePhone className="icon" />  (+880)1700000000
                    </li>
                    <li className="text-center">
                      <span> <FaFacebook className="icon"/> </span>
                      <span> <FaGoogle className="icon"/> </span>
                      <span> <FaInstagram className="icon"/> </span>
                      <span> <FaTwitter className="icon"/> </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={7} className="m-auto">
              <div className="contact-form">
                <h3>Get In Touch</h3>
                <span>Feel Free to drop us a line below</span>
                <form>
                  <Row>
                    <Col>
                      <input
                        type="text"
                        className="form-control input"
                        placeholder="Enter your first name"
                        autoComplete="off"
                        name="name"
                        required
                      />
                    </Col>
                    <Col>
                      <input
                        type="text"
                        className="form-control input"
                        placeholder="Enter your last name"
                        autoComplete="off"
                        name="name2"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <input
                        type="email"
                        className="form-control input"
                        placeholder="Enter your email address"
                        autoComplete="off"
                        name="email"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <input
                        type="number"
                        className="form-control input"
                        placeholder="Enter your phone number"
                        autoComplete="off"
                        name="number"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <textarea
                        className="form-control input"
                        name="message"
                        placeholder="Write your message"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <input
                        type="submit"
                        className="btn btn-primary buttons form-control"
                        value="SUBMIT"
                      />
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
