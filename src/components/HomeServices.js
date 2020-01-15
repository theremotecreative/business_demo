import { Link } from "gatsby"
import React from "react"

import styled from 'styled-components'

import { FaLaptopCode } from 'react-icons/fa'
import { FaServer } from 'react-icons/fa'
import { FaDraftingCompass } from 'react-icons/fa'

const HomeServices = () => (
    <ServicesSection>
        <h2>Our Services</h2>
        <ServiceRow>
            <ServiceCol>
                <IconCircle>
                    <FaLaptopCode/>
                </IconCircle>
                <h3>Service Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                <ServiceButton
                    to="/#/"
                >
                    Read More
                </ServiceButton>
            </ServiceCol>
            <ServiceCol>
                <IconCircle>
                    <FaServer/>
                </IconCircle>
                <h3>Service Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                <ServiceButton
                    to="/#/"
                >
                    Read More
                </ServiceButton>
            </ServiceCol>
            <ServiceCol>
                <IconCircle>
                    <FaDraftingCompass/>
                </IconCircle>
                <h3>Service Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                <ServiceButton
                    to="/#/"
                >
                    Read More
                </ServiceButton>
            </ServiceCol>
        </ServiceRow>
    </ServicesSection>
)

const ServicesSection = styled.div`
    width: 100%;
    padding: 120px 20px;
    background-color: #ddd;
    h2 {
        font-size: 2.25rem;
        color: #2a2a2a;
        text-align: center;
    }
`

const ServiceRow = styled.div`
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
`

const ServiceCol = styled.div`
    max-width: 320px;
    width: 100%;
    margin: 20px;
    padding: 40px 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    text-align: center;
`

const IconCircle = styled.div`
    display: inline-block;
    padding: 20px;
    background-color: #ddd;
    border-radius: 50%;
    margin-bottom: 20px;
    svg {
        font-size: 52px;
    }
`

const ServiceButton = styled(Link)`
    display: inline-block;
    font-family: Lato;
    padding: 8px 35px;
    background-color: #2a2a2a;
    color: #fff;
    text-decoration: none;
    border-radius: 25px;
`

export default HomeServices