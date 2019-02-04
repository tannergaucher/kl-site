import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Styled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  margin-bottom: ${props => props.theme.spacing};

  .img-wrapper {
    flex-basis: calc(25% - 1vw);
    margin: 0.5vw;
    box-sizing: border-box;

    &:hover {
      filter: brightness(75%);
    }
  }
`

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramFeedQuery {
        allInstaNode(limit: 8) {
          edges {
            node {
              id
              caption
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allInstaNode
      return (
        <Styled>
          {edges.map(edge => {
            return (
              <div className="img-wrapper">
                <a href={`https://www.instagram.com/p/${edge.node.id}`}>
                  <Img
                    className="square"
                    fluid={edge.node.localFile.childImageSharp.fluid}
                    key={edge.node.timestamp}
                    style={{ height: '100%', width: '100%' }}
                  />
                </a>
              </div>
            )
          })}
        </Styled>
      )
    }}
  />
)

export default Instagram
