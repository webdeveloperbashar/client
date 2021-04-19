import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Home.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`https://whispering-garden-49450.herokuapp.com/item/review`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  return (
    <div className="TestimonialWrapped">
      <Container>
        <Row>
          <Col md={12}>
            <div className="heading">
              <h5>Testimonial</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Slider {...settings}>
              {dbData.map((data) => (
                <div className="testimonial-slider">
                  <div className="testimonial-item">
                    <div className="img">
                      <img src="https://i.ibb.co/Hq5pyv9/Portrait-of-smiling-handsome-man-in-blue-t-shirt-standing-with-crossed-arms-isolated-on-grey-backgro.jpg" className="img-fluid" alt="man" />
                      <div>
                        <span>{data.name}</span> <br />
                        <span>{data.company}</span>
                      </div>
                    </div>
                    <div className="content">
                      <p>
                        {data.description}
                      </p>
                    </div>
                    <div className="review">
                      <span>
                        {" "}
                        <AiFillStar className="star" />{" "}
                      </span>
                      <span>
                        {" "}
                        <AiFillStar className="star" />{" "}
                      </span>
                      <span>
                        {" "}
                        <AiFillStar className="star" />{" "}
                      </span>
                      <span>
                        {" "}
                        <AiFillStar className="star" />{" "}
                      </span>
                      <span>
                        {" "}
                        <AiFillStar className="star" />{" "}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
