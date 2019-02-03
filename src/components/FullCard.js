import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Link from '../components/styles/Link'

const Styled = styled.div`
  position: relative;
  border-radius: 2px;
  margin-bottom: ${props => props.theme.spacing};
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

  .background {
    background: rgba(0, 0, 0, 0.8);
    padding-left: 0.2em;
    padding-right: 0.2em;
    border-radius: 2px;
  }
`

export default function FullCard({ category, title, slug, fluid }) {
  return (
    <Styled>
      <Link to={`/guide/${slug}`}>
        <Img fluid={fluid} style={{ height: '30vh', borderRadius: '2px' }} />
        <h6 className="card-category background">{category}</h6>
        <h2 className="card-title background">{title}</h2>
      </Link>
    </Styled>
  )
}
