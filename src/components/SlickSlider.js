import React, { Component } from "react";
import Slider from "react-slick";

import './slick.css'
import './slick-theme.css'
import './slick-custom.css'

export default class SlickSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
            <div>
              <h3>Need to figure out</h3>
            </div>
            <div>
              <h3>How to add testimonials</h3>
            </div>   
            <div>
              <h3>Using a query</h3>
            </div>   
            <div>
              <h3>and pulling from WordPress CMS</h3>
            </div>            
        </Slider>
      </div>
    );
  }
}