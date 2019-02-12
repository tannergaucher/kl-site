import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Link from '../components/styles/Link'
import { kebabCase } from 'lodash'

const NavLinks = () => (
  <StaticQuery
    query={graphql`
      query NavLinks {
        categories: allContentfulCategory {
          edges {
            node {
              category
            }
          }
        }
        site: site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data =>
      data.categories.edges.map(edge => (
        <Link to={kebabCase(edge.node.category)} key={edge.node.category}>
          <h6>{edge.node.category}</h6>
        </Link>
      ))
    }
  />
)

export default NavLinks
