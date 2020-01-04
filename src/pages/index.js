import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/HeroVideo"

const IndexPage = () => (
  <Layout>
    <SEO title="Business Demo | The Remote Creative" />
    <HeroSection>
      <HeroVideo
        videoSrcURL="https://www.youtube.com/watch?v=QWfOdfub52k"
        videoTitle="Hero Video of an Office"
      />
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

const HeroVideo = styled(Video)`
  height: 100vh;
  width: 100%;
`

export default IndexPage
