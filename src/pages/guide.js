import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Styled = styled.div`
  padding-left: ${props => props.theme.spacing};
  padding-right: ${props => props.theme.spacing};
`

const guide = () => {
  return (
    <Layout>
      <Styled>
        <h4>Untrip / Guide </h4>
        <h2>Food</h2>
        <h2>Drink</h2>
        <h2>Entertainment</h2>
        <h2>Culture</h2>
      </Styled>
    </Layout>
  )
}

export default guide
