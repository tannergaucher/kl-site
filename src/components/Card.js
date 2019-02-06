import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Styled = styled.div`
  position: relative;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }

  .card-category {
    position: absolute;
    top: 0;
    left: ${props => props.theme.spacing};
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .card-title {
    position: absolute;
    bottom: 0;
    right: ${props => props.theme.spacing};
    color: white;
  }

  .text-background {
    background: rgba(0, 0, 0, 0.8);
    padding-left: 0.2em;
    padding-right: 0.2em;
    border-radius: 2px;
  }
`

export default function Card({ subcategory, title, fluid }) {
  return (
    <Styled>
      <Img fluid={fluid} style={{ height: '200px', borderRadius: '2px' }} />
      <h6 className="card-category text-background">{subcategory}</h6>
      <h2 className="card-title text-background">{title}</h2>
    </Styled>
  )
}
