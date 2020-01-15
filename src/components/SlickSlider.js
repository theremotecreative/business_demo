import React, { Component } from "react";
import { graphql } from 'gatsby'
import Slider from "react-slick";

import './slick.css'
import './slick-theme.css'
import './slick-custom.css'

export default class SlickSlider extends Component {

  render() {
      const data = graphql`
        query {
          allWordpressWpTestimonial {
            edges {
              node {
                title
              }
            }
          }
        }
      `

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
            {data.allWordpressWpTestimonial.edges.map(post => (
              <div>
                <h3>{post.node.title}</h3>
              </div>
            ))}          
          </Slider>
        </div>
      );
  }
}