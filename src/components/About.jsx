import React from 'react'

const About = () => {
  return (
    <div className="dyn-height">
      <video width="100%" height="auto" autoplay="" muted="" loop="true" autofocus="" poster="https://cdn.akamai.steamstatic.com/store/about/videos/about_hero_loop_web.png">
        <source src="https://cdn.akamai.steamstatic.com/store/about/videos/about_hero_loop_web.webm" type="video/webm" />
        <source src="https://cdn.akamai.steamstatic.com/store/about/videos/about_hero_loop_web.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default About