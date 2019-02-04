import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import PostCredit from '../components/PostCredit'
import Social from '../components/Social'
import FullCard from '../components/FullCard'

const Styled = styled.div`
  display: grid;
  margin-bottom: 5em;
  grid-template-columns: ${props => props.theme.spacing} 1fr ${props =>
      props.theme.spacing};

  header {
    grid-column: 2;
    h1 {
      line-height: 1;
    }
    p {
      margin: 0;
      margin-bottom: ${props => props.theme.spacing};
    }
  }
  .featured-image {
    grid-column: 1 / -1;
  }

  article {
    margin-top: ${props => props.theme.spacing};
    grid-column: 2;
  }
`

const post = ({ data }) => {
  console.log(data)
  const {
    title,
    author,
    category,
    introSentence,
    featuredImage,
    authorImage,
  } = data.contentfulPost

  const { featuredPosts } = data.featured.edges[0].node

  // prettier-ignore
  const { html } = data.contentfulPost.childContentfulPostArticleTextNode.childMarkdownRemark

  return (
    <Layout>
      <Styled>
        <header>
          <h4>Untrip / {category}</h4>
          <h1>{title}</h1>
          <PostCredit
            author={author}
            authorImage={authorImage.fixed}
            datePublished="10/29/2019"
          />
          <p>{introSentence}</p>
          <Social className="social" />
        </header>
        <Img
          className="featured-image"
          fluid={featuredImage.fluid}
          style={{ height: '30vh' }}
        />
        <article>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
          <h3>Share the article</h3>
          <Social />

          <div className="post-links">
            <h3>Similar</h3>
            {/* todo: filter similar posts by tag */}
            {featuredPosts.map(featuredPost => (
              <div style={{ marginBottom: '1em' }}>
                <Link
                  to={`/guide/${featuredPost.slug}`}
                  key={featuredPost.slug}
                >
                  <FullCard
                    title={featuredPost.title}
                    category={featuredPost.category}
                    fluid={featuredPost.cardImage.fluid}
                  />
                </Link>
              </div>
            ))}

            <h3>Popular</h3>
            {featuredPosts.map(featuredPost => (
              <div style={{ marginBottom: '1em' }}>
                <Link to={`/guide/${featuredPost.slug}`}>
                  <FullCard
                    title={featuredPost.title}
                    category={featuredPost.category}
                    fluid={featuredPost.cardImage.fluid}
                  />
                </Link>
              </div>
            ))}
          </div>
        </article>
      </Styled>
    </Layout>
  )
}

export default post

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      author
      category
      introSentence
      tags
      childContentfulPostArticleTextNode {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        fluid(maxWidth: 1400) {
          ...GatsbyContentfulFluid
        }
      }
      authorImage {
        fixed(width: 50) {
          ...GatsbyContentfulFixed
        }
      }
    }
    featured: allContentfulFeatured {
      edges {
        node {
          featuredPosts {
            title
            category
            slug
            cardImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`
