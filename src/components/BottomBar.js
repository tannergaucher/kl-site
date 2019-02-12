import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Link from '../components/styles/Link'

import { kebabCase } from 'lodash'

const Styled = styled.nav`
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: space-around;
  h6 {
    margin: 0;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 10px;
  }

  @media (min-width: 750px) {
    display: none;
  }
`

const BottomBar = () => (
  <StaticQuery
    query={graphql`
      query CategoriesQuery {
        allContentfulCategory {
          edges {
            node {
              category
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allContentfulCategory
      return (
        <Styled>
          <Link to="/all">
            <h6>All</h6>
          </Link>
          {edges.map(edge => {
            const { category } = edge.node
            return (
              <Link to={kebabCase(category)} key={category}>
                <h6>{category}</h6>
              </Link>
            )
          })}
          <Link to="/my-untrip">
            <h6>My Untrip</h6>
          </Link>
        </Styled>
      )
    }}
  />
)
export default BottomBar
