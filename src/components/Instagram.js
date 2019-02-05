import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Styled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 0.2em;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: ${props => props.theme.spacing};
  padding-right: ${props => props.theme.spacing};
  transition: 0.2s;

  img {
    &:hover {
      filter: brightness(85%);
      transition: 0.2s;
    }
  }
`

const Instagram = ({ images }) => (
  <Styled className>
    {images.map(image => {
      return (
        <a href={`https://www.instagram.com/p/${image.node.id}`}>
          <Img
            fluid={image.node.localFile.childImageSharp.fluid}
            key={image.node.timestamp}
            style={{ height: '30vh' }}
          />
        </a>
      )
    })}
  </Styled>
)

export default Instagram
