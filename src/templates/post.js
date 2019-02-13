import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Styled = styled.div`
  display: grid;
  grid-template-columns: ${props => props.theme.spacing} 1fr ${props =>
      props.theme.spacing};
`

const post = ({ data }) => (
  <Layout>
    <Styled>
      <header>
        <h1>{data.post.title}</h1>
      </header>
      <article>
        {/*  */}
        {/*  */}
      </article>
    </Styled>
  </Layout>
)

export default post

export const postPageQuery = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
    }
  }
`
