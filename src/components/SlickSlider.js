import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Slider from "react-slick"

import './slick.css'
import './slick-theme.css'
import './slick-custom.css'

export default class SlickSlider extends Component {

  render() {
      const data = useStaticQuery(graphql`
        query {
          allWordpressWpTestimonial {
            edges {
              node {
                content
                acf {
                  reviewer_meta
                  reviewer_name
                }
              }
            }
          }
        }
      `)

      const Testimonial = styled.h3`
        text-align: center;
      `

      const Name = styled.p`
        font-family: Lato;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 0;
      `

      const Meta = styled.p`
        font-size: 14px;
        text-align: center;
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
                <Testimonial>"{post.node.content}"</Testimonial>
                <Name>{post.node.acf.reviewer_name}</Name>
                <Meta>{post.node.acf.reviewer_meta}</Meta>
              </div>
            ))}          
          </Slider>
        </div>
      );
  }
}