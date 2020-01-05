import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const HeroSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "heroImage.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
            <Overlay/>
            <HeroContent>
                <h1>Welcome to Business Demo</h1>
                <p>This is an example of Gatsby.js combined with a WordPress CMS</p>
                <HeroButton
                    to="/#/"
                >
                    Learn More
                </HeroButton>
            </HeroContent>
        </BackgroundImage>
      )
    }}
  />
)

const StyledHeroSection = styled(HeroSection)`
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
`

const HeroContent = styled.div`
    max-width: 960px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    z-index: 2;
    & h1 {
        color: #fff;
        margin-bottom: 10px;
        line-height: 1.2em;
    }
    & p {
        font-family: Lato;
        color: #fff;
        font-size: 20px;
        max-width: 500px;
        line-height: 1.2em;
    }
`

const HeroButton = styled(Link)`
    display: inline-block;
    font-family: Lato;
    padding: 8px 35px;
    background-color: #fff;
    color: #2a2a2a;
    text-decoration: none;
    border-radius: 25px;
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 1;
`

export default StyledHeroSection