import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Styled = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacing};
  line-height: 1;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  color: black;
  transition: all 0.2s ease-in-out;

  .card-text {
    margin-left: ${props => props.theme.spacing};
    margin-bottom: ${props => props.theme.spacing};
  }

  .card-category {
    margin: 0;
    text-transform: uppercase;
    font-weight: lighter;
    letter-spacing: 1.4px;
    margin-bottom: 0.3em;
  }

  .card-title {
    margin: 0;
    font-weight: lighter;
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
    <div className="card-text">
      <h5 className="card-category">{category}</h5>
      <h3 className="card-title">{title}</h3>
    </div>
  </Styled>
)

export default Card
