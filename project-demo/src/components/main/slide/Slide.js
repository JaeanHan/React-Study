import React, { Component } from "react";
import Slider from "react-slick";
import ReviewCategory from "../myPage/ReviewCategory";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <ReviewCategory />
          </div>
          <div>
            <ReviewCategory />
          </div>
          <div>
            <ReviewCategory />
          </div>
          <div>
            <ReviewCategory />
          </div>
        </Slider>
      </div>
    );
  }
}
