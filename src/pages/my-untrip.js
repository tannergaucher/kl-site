import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Styled = styled.div``

const myUntrip = ({ data }) => {
  return (
    <Layout>
      <Styled>my untrip</Styled>
    </Layout>
  )
}

export default myUntrip

// export const query = graphql``
