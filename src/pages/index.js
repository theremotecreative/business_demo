import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeroSection from "../components/HeroSection"
import HomeAbout from "../components/HomeAbout"
import HomeServices from "../components/HomeServices"
import HomeTestimonials from "../components/HomeTestimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Business Demo | The Remote Creative" />
    <StyledHeroSection/>
    <HomeAbout/>
    <HomeServices/>
    <HomeTestimonials/>
  </Layout>
)

export default IndexPage