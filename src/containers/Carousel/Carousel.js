import React from "react";
import { Carousel } from "antd";

import "./Carousel.css";

const images = ["image_one", "image_two", "image_three", "image_four"];

const ImageCarousel = () => {
  return (
    <Carousel dotPosition="top" autoplay arrows className="carousel">
      {images.map((image, i) => (
        <img
          key={i}
          src={require(`../../assets/landscapes/${image}.jpg`)}
          alt={`${i + 1}`}
          title={`${i + 1}`}
          className="carousel-img"
        />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
