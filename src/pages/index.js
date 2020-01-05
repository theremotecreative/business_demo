import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeroSection from "../components/HeroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Business Demo | The Remote Creative" />
    <StyledHeroSection/>
  </Layout>
)

export default IndexPage