import React from "react";
import classes from "./Slider.module.css";
import { Carousel } from "react-bootstrap";
import { sliderItems } from "../../assets/data";

const Slider = () => {
  return (
    <div className={`fixed-top ${classes.slider}`}>
      <Carousel>
        {sliderItems.map((item) => {
          return (
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.sliderImg}`}
                src={item.img}
                alt={item.title}
              />
              <Carousel.Caption className={classes.caption}>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
