import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import Avatar from '../components/Avatar'
import Social from '../components/Social'
import Card from '../components/Card'

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
  const { post } = data
  // prettier-ignore
  const { html } = post.childContentfulPostArticleTextNode.childMarkdownRemark

  return (
    <Layout>
      <Styled>
        <header>
          <h4>{post.category.category}</h4>
          {post.tags.map(tag => (
            <h6 key={post.id}>{tag.tag}</h6>
          ))}
          <h1>{post.title} </h1>
          <Avatar
            author={post.author.name}
            authorImage={post.author.avatarImage.fixed}
            datePosted={post.datePosted}
          />

          <p>{post.introSentence}</p>
          <Social className="social" />
        </header>

        <Img
          className="featured-image"
          fluid={post.featuredImage.fluid}
          style={{ height: '300px' }}
        />

        <article>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
          <h3>Share the article</h3>
          <Social />
        </article>
      </Styled>
    </Layout>
  )
}

export default post

export const pageQuery = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      id
      title
      category {
        category
      }
      tags {
        tag
      }
      author {
        name
        avatarImage {
          fixed(width: 30) {
            ...GatsbyContentfulFixed
          }
        }
      }
      introSentence

      datePosted(formatString: "MM.DD.YYYY")

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
    }
  }
`
