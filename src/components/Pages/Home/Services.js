import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
const Services = () => {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/item`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  return (
    <div className="ServicesWrapped">
      <Container>
        <Row>
          <Col md={12}>
            <div className="heading title">
              <h5>Our Featured Services</h5>
            </div>
          </Col>
        </Row>
        <Row>
          {dbData.map((data) => (
            <Col md={4}>
              <div className="service-item">
                <div className="serviceIcon">
                  <img src={data.imageUrl} className="img-fluid" alt="pc" />
                </div>
                <div className="service-title">
                  <h3>
                    <Link to="/">{data.title}</Link>
                  </h3>
                </div>
                <div className="service-content">
                  <p>
                    {
                      <TextTruncate
                        line={3}
                        element="span"
                        truncateText="…"
                        text={data.description}
                        textTruncateChild={<Link to="/">Read on</Link>}
                      />
                    }
                  </p>
                </div>
                <div className="button serviceButton d-flex justify-content-between">
                  <span>
                    <Button>
                      <Link to={`/admin/book/${data._id}`}>
                        Order Now
                      </Link>
                    </Button>
                  </span>
                  <span>
                    <h4>${data.price}</h4>
                  </span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
