import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import Instagram from '../components/Instagram'
import Newsletter from '../components/Newsletter'

const Styled = styled.div`
  text-align: center;

  .newsletter-footer {
    height: calc(35vh + 47.5px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const IndexPage = ({ data }) => {
  const posts = data.indexPosts.edges
  const images = data.instagramFeed.edges
  const { heroHeader, heroSubheader, newsletterText } = data.homepage
  return (
    <Layout>
      <Styled>
        <Hero
          fluid={data.heroImage.childImageSharp.fluid}
          header={heroHeader}
          subHeader={heroSubheader}
          newsletter={true}
        />
        <main>
          <h3>Latest</h3>
          <PostsList posts={posts} />
          <h3>More</h3>

          <h3>Untrip on Instagram</h3>
          <Instagram images={images} />
          <h3>View more</h3>

          <div className="newsletter-footer">
            <div>
              <p>{newsletterText}</p>
              <Newsletter />
            </div>
          </div>
        </main>
      </Styled>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    homepage: contentfulHomePage {
      heroHeader
      heroSubheader
      newsletterText
    }
    heroImage: file(relativePath: { eq: "towers.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1400
          duotone: { shadow: "#665f52", highlight: "#5f00c9", opacity: 46 }
          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    indexPosts: allContentfulPost {
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

    instagramFeed: allInstaNode(limit: 9) {
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
`
