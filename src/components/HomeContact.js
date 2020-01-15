import React from "react"
import GoogleMap from "./GoogleMap"

import styled from 'styled-components'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'

const HomeContact = () => (
    <ContactSection>
        <ContactRow>
            <ContactRight>
                <GoogleMap/>
            </ContactRight>
            <ContactLeft>
                <h2>Contact Us</h2>
                <ContactInfo>
                    <ContactCard>
                    <FaMapMarkerAlt />
                    <h3>123 Address St.<br/>City, St 12345</h3>
                    </ContactCard>
                    <ContactCard>
                    <FaEnvelope />
                    <h3>demo@email.com</h3>
                    </ContactCard>
                    <ContactCard>
                    <FaPhone />
                    <h3>(123) 456-7890</h3>
                    </ContactCard>
                </ContactInfo>
                <ContactForm>
                    <h2>Send us a message</h2>
                    <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>   
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                    </form>
                </ContactForm>
            </ContactLeft>
        </ContactRow>
    </ContactSection>
)

const ContactSection = styled.div`
    width: 100%;
    padding: 120px 20px;
    h2 {
        font-size: 2.25rem;
        color: #2a2a2a;
        text-align: center;
    }
    .map-icon {
        height: 40px;
        width: 40px;
        font-size: 36px;
        color: #000;
        position: relative;
        svg {
            position: relative;
            top: -20px;
            left: -20px;
        }
    }
`

const ContactRight = styled.div`
    width: 50%;
    padding: 0 20px;
`

const ContactLeft = styled.div`
    width: 50%;
`

const ContactRow = styled.div`
    max-width: 1160px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width:780px) {
        flex-wrap: wrap;
        ${ContactLeft} {
            width: 100%;
            order: 1;
        }
        ${ContactRight} {
            width: 100%;
            order: 2;
            padding: 20px 0;
        }
    }
`

const ContactInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ContactCard = styled.div`
    display: flex;
    width: 33%;
    h3 {
        font-size: 1.1rem;
        font-weight: 400;
        padding-left: 10px;
    }
    svg {
        top: 3px;
        position: relative;
    }
    @media (max-width:1300px) {
        width: 50%;
    }
    @media (max-width:1040px) {
        width: 100%;
    }
    @media (max-width:780px) {
        width: 33%;
    }
    @media (max-width:650px) {
        width: 50%;
    }
    @media (max-width:500px) {
        width: 100%;
        justify-content: center;
    }
`

const ContactForm = styled.div`
    label {
        display: flex;
        flex-wrap: wrap;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    input[type="text"],
    input[type="email"],
    textarea {
        width: 100%;
        margin-top: 3px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    button[type="submit"] {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: #aaa;
        border: 1px solid #aaa;
        border-radius: 4px;
        color: #fff;
        padding: 5px 30px;
        transition-duration: .3s;
        &:hover {
            cursor: pointer;
            background-color: #999;
            border-color: #999;
        }
    }
`

export default HomeContact