import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Link from '../components/styles/Link'
import Layout from '../components/layout'

const Styled = styled.div``

const map = ({ data, pageContext }) => {
  let edges
  if (pageContext.all === true) {
    edges = data.allCategories.edges
  } else {
    edges = data.category.edges
  }

  return (
    <Layout>
      <Styled>
        <h2>map</h2>
        {edges.map(edge => {
          console.log(edge)
        })}
      </Styled>
    </Layout>
  )
}

export default map

export const query = graphql`
  query MapQuery($category: String, $all: Boolean!) {
    category: allContentfulPost(
      filter: { category: { category: { eq: $category } } }
    ) {
      edges @skip(if: $all) {
        node {
          slug
          location {
            lat
            lon
          }
        }
      }
    }
    allCategories: allContentfulPost {
      edges @include(if: $all) {
        node {
          slug
          location {
            lat
            lon
          }
        }
      }
    }
  }
`
