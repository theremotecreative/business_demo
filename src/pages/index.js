import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroVideo from "../components/HeroVideo"

const IndexPage = () => (
  <Layout>
    <SEO title="Business Demo | The Remote Creative" />
    <HeroSection>
      <HeroVideo/>
      <HeroTitle>[Hero Section]</HeroTitle>
    </HeroSection>
  </Layout>
)

const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroTitle = styled.h1`
  color: #fff;
`

export default IndexPage
