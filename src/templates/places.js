import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Link from '../components/styles/Link'
import Layout from '../components/layout'

import { kebabCase } from 'lodash'

const Styled = styled.div``

const places = ({ data, pageContext }) => {
  let edges
  if (pageContext.all === true) {
    edges = data.allPlaces.edges
  } else {
    edges = data.category.edges
  }

  return (
    <Layout>
      <Styled>
        <h2>places</h2>
        {edges.map(edge => {
          return (
            <Link
              to={`/place/${kebabCase(edge.node.place.neighborhood)}`}
              key={edge.node.slug}
            >
              <h6>{edge.node.place.neighborhood}</h6>
            </Link>
          )
        })}
      </Styled>
    </Layout>
  )
}

export default places

export const query = graphql`
  query PlacesQuery($category: String, $all: Boolean!) {
    category: allContentfulPost(
      filter: { category: { category: { eq: $category } } }
    ) {
      edges @skip(if: $all) {
        node {
          slug
          place {
            city
            neighborhood
            country
          }
        }
      }
    }
    allPlaces: allContentfulPost {
      edges @include(if: $all) {
        node {
          slug
          place {
            city
            neighborhood
            country
          }
        }
      }
    }
  }
`
