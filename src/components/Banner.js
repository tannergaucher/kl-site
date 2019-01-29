import React from 'react'
import styled from 'styled-components'
import { Heading } from 'rebass'
import Img from 'gatsby-image'

const StyledBanner = styled.div`
  position: relative;
  .banner-heading {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;

    text-shadow: black 5px 5px 15px;
  }
`
// Todo: refactor to StaticQuery

const Banner = ({ title, subtitle, fluid, brightness }) => (
  <StyledBanner>
    <Img
      fluid={fluid}
      style={{ height: '100vh', filter: `brightness(${brightness}%)` }}
    />
    <div className="banner-heading">
      <Heading fontSize={[6, 7, 8]} mb={[4, 5]} style={{ lineHeight: '1' }}>
        {title}
      </Heading>
      <Heading fontSize={[4, 5]} fontWeight="lighter">
        {subtitle}
      </Heading>
    </div>
  </StyledBanner>
)

export default Banner
