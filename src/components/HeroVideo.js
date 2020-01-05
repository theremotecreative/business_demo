import React from "react"
import styled from 'styled-components'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <VideoContainer>
    <VideoIframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </VideoContainer>
)

const VideoContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`

const VideoIframe = styled.iframe`
    width: 100%;
    height: 100vh;
`

export default Video