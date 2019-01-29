import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Styled = styled.div`
  display: grid;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
  border-radius: 2px;

  .card-category {
    text-transform: uppercase;
    font-weight: lighter;
    letter-spacing: 1.4px;
    margin: 1em;
  }

  .card-title {
    font-weight: lighter;
    margin: 0.5em;
  }

  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }
`

const Card = ({ fluid, category, title }) => (
  <Styled>
    <Img
      fluid={fluid}
      style={{ height: '200px', borderRadius: '4px 4px 0 0' }}
    />
    <h5 className="card-category"> {category}</h5>
    <h3 className="card-title">{title}</h3>
  </Styled>
)

export default Card
