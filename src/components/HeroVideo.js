import React from "react"

const HeroVideo = ({ videoSrcURL, videoTitle }) => (
    <video
        className="video-player"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
    >
        <source
        src="https://www.youtube.com/watch?v=QWfOdfub52k"
        type="video/mp4"
        />
    </video>
)
export default HeroVideo