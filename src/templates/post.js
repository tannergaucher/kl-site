import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

import Img from 'gatsby-image'

const Styled = styled.div`
  article {
    padding-left: ${props => props.theme.spacing};
    padding-right: ${props => props.theme.spacing};
  }
`

const post = ({ data }) => {
  const { title, author, category, tags, featuredImage } = data.contentfulPost
  // prettier-ignore
  const { html } = data.contentfulPost.childContentfulPostArticleTextNode.childMarkdownRemark

  return (
    <Layout>
      <Styled>
        <header>
          <div>
            <h5>{category}</h5>
            <h1>{title}</h1>
            <h6>{tags}</h6>
            <h6>By {author}</h6>
          </div>
          <Img fluid={featuredImage.fluid} style={{ height: '30vh' }} />
        </header>
        <article>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
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
    }
  }
`
