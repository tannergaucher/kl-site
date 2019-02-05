import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Newsletter from './Newsletter'
import NavLinks from './NavLinks'

const Styled = styled.header`
  position: relative;
  text-align: center;
  color: white;
  .hero-img {
    height: calc(100vh - 47.5px);
  }

  .nav {
    position: absolute;
    top: 0;
  }

  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 750px) {
    .nav {
      display: none;
    }
  }
`

const Hero = ({ fluid, header, subHeader, newsletter = false }) => {
  return (
    <Styled>
      <Img className-="hero-img" fluid={fluid} style={{ height: '60vh' }} />

      <nav className="nav">
        <NavLinks />
      </nav>
      <div className="hero-text">
        <h1 style={{ fontSize: '50px' }}>{header}</h1>
        <h3 style={{ fontWeight: 'lighter' }}>{subHeader}</h3>
        {newsletter && <Newsletter />}
      </div>
    </Styled>
  )
}

export default Hero
