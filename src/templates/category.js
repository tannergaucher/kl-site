import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Styled = styled.div``

const category = ({ data }) => (
  <Layout>
    <Styled>
      <h2>{data.contentfulCategory.category}</h2>
    </Styled>
  </Layout>
)

export default category

export const categoryPageQuery = graphql`
  query($category: String!) {
    contentfulCategory(category: { eq: $category }) {
      category
    }
  }
`
