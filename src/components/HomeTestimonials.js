import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SlickSlider from './SlickSlider'
import styled from 'styled-components'

const HomeTestimonials = () => (
    <TestimonialSection>
       <h2>Testimonials</h2>
       <TestimonialRow>
           <SliderSection>
               <div>
               <SlickSliderStyled />
               </div>
           </SliderSection>
           <ImageCol>
                <StyledImage />
           </ImageCol>
       </TestimonialRow>
    </TestimonialSection>
)

const Image = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "heroImage.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  
    return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const StyledImage = styled(Image)`
    min-height: 450px;
    max-width: 350px;
    width: 100%;
`

const TestimonialSection = styled.div`
    padding: 120px 20px;
    background-color: #f5f5f5;
    h2 {
        font-size: 2.25rem;
        color: #2a2a2a;
        text-align: center;
        margin-bottom: 60px;
    }
`

const TestimonialRow = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const SliderSection = styled.div`
    max-width: 600px;
    min-height: 350px;
    background-color: #fff;
    padding: 20px;
    margin-right: -50px;
    z-index: 10;
`

const ImageCol = styled.div`
    max-width: 650px;
    width: 100%;
    background-color: #fff;
    box-shadow: 4px 4px 12px rgba(0,0,0,.4)
`

const SlickSliderStyled = styled(SlickSlider)`
    & h3 {
        text-align: center;
    }
`

export default HomeTestimonials