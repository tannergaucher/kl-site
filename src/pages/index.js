import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Styled = styled.div``

const Index = ({ data }) => {
  return (
    <Layout>
      <Styled>
        index
        {/* <SIGNUP/> */}
        {/* <SIGNIN/> */}
      </Styled>
    </Layout>
  )
}

export default Index

// export const query = graphql``
