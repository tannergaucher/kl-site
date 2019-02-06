import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Link from '../components/styles/Link'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'

import { kebabCase } from 'lodash'

const Styled = styled.div`
  .filter {
    display: flex;
    justify-content: center;
  }
`

const categoryPage = ({ data }) => {
  const { categoryPage } = data
  const posts = data.posts.edges
  return (
    <Layout>
      <Styled>
        <Hero
          fluid={categoryPage.heroImage.fluid}
          header={categoryPage.heroHeader}
          subHeader={categoryPage.heroSubheader}
        />

        <div className="filter">
          {categoryPage.subcategories.map(subcategory => {
            return (
              <Link
                to={`/${kebabCase(categoryPage.category)}/${kebabCase(
                  subcategory.subcategory
                )}`}
              >
                <h3>{subcategory.subcategory}</h3>
              </Link>
            )
          })}
        </div>
        <PostsList posts={posts} />
      </Styled>
    </Layout>
  )
}

export default categoryPage

export const query = graphql`
  query($category: String!) {
    categoryPage: contentfulCategoryPage(category: { eq: $category }) {
      category
      heroHeader
      heroSubheader
      heroImage {
        fluid(maxWidth: 1400) {
          ...GatsbyContentfulFluid
        }
      }
      subcategories {
        subcategory
      }
    }
    posts: allContentfulPost(
      filter: { category: { category: { eq: $category } } }
    ) {
      edges {
        node {
          title
          slug
          category {
            category
          }
          postSubcategory {
            subcategory
          }
          cardImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
