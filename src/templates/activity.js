import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Link from '../components/styles/Link'
import Layout from '../components/layout'

// import { kebabCase } from 'lodash'

const Styled = styled.div``

const activity = ({ data, pageContext }) => {
  let edges

  if (pageContext.all === true) {
    edges = data.allPosts.edges
  } else {
    edges = data.category.edges
  }

  return (
    <Layout>
      <Styled>
        <h2>Recent</h2>
        {edges.map(edge => {
          return (
            <Link to={`/post/${edge.node.slug}`} key={edge.node.slug}>
              <h6>{edge.node.title}</h6>
            </Link>
          )
        })}
      </Styled>
    </Layout>
  )
}

export default activity

export const query = graphql`
  query ActivityQuery($category: String, $all: Boolean!) {
    category: allContentfulPost(
      filter: { category: { category: { eq: $category } } }
      limit: 6
    ) {
      edges @skip(if: $all) {
        node {
          title
          slug
        }
      }
    }
    allPosts: allContentfulPost {
      edges @include(if: $all) {
        node {
          title
          slug
        }
      }
    }
  }
`
