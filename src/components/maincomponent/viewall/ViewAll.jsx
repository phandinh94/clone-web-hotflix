import "./ViewAll.scss";
import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import imgItem from "../../../assets/imagehomepage/mainpages.png"

function ViewAll() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
      <Slider {...settings}>
        <div className="slick-item">
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="text-light">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="slick-item">
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="text-light">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="slick-item">
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="text-light">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="slick-item">
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="text-light">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="slick-item">
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="text-light">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="slick-item">
          <Card>
            <Card.Img variant="top" src={imgItem} />
            <Card.Body className="bg-dark">
              <Card.Title className="text-light">Card title</Card.Title>
              <Card.Text className="text-warning">Comepmy</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Slider>
  );
}

export default ViewAll;
