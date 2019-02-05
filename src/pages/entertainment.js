import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'

const Styled = styled.div``

const entertainment = ({ data }) => {
  const { heroHeader, heroSubheader } = data.pageInfo
  const posts = data.pagePosts.edges

  return (
    <Layout>
      <Styled>
        <Hero
          fluid={data.pageHeroImage.childImageSharp.fluid}
          header={heroHeader}
          subHeader={heroSubheader}
        />
        <PostsList posts={posts} />
      </Styled>
    </Layout>
  )
}

export default entertainment

export const query = graphql`
  query {
    pageInfo: contentfulEntertainmentPage {
      heroHeader
      heroSubheader
    }
    pageHeroImage: file(relativePath: { eq: "entertainment.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1400
          duotone: { shadow: "#407ea1", highlight: "#dc773a" }

          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pagePosts: allContentfulPost(
      filter: { category: { eq: "Entertainment" } }
    ) {
      edges {
        node {
          title
          slug
          category
          cardImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
