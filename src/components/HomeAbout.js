import { Link } from "gatsby"
import React from "react"

import styled from 'styled-components'

const HomeAbout = () => (
    <AboutSection>
        <AboutCopy>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            <AboutButton
                to="/about-us"
            >
                Read More
            </AboutButton>
        </AboutCopy>
    </AboutSection>
)

const AboutSection = styled.div`
    padding: 120px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AboutCopy = styled.div`
    text-align: center;
    max-width: 600px;
    & h2 {
        font-size: 2.25rem;
        color: #2a2a2a;
    }
    & p {
        color: #3a3a3a;
    }
`

const AboutButton = styled(Link)`
    display: inline-block;
    font-family: Lato;
    padding: 8px 35px;
    background-color: #2a2a2a;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
`

export default HomeAbout