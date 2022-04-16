import React from "react";
import { Carousel } from 'react-bootstrap'
import img1 from "../../images/img-1.jpeg"
import img2 from "../../images/img-2.jpeg"
import img3 from "../../images/img-3.jpeg"
import classes from "./HomeCarousel.module.css"

function HomeCarousel() {
  return (
    <Carousel  className={classes.carousel} controls={false} fade={true}>
        <Carousel.Item interval={2000}>
          <img
            className={"d-block w-100"}
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className={"d-block w-100"}
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className={"d-block w-100"}
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default HomeCarousel;
