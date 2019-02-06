import React from 'react'
import styled from 'styled-components'

import Link from '../components/styles/Link'

const Styled = styled.nav`
  display: flex;
  margin-left: ${props => props.theme.spacing};

  h5 {
    margin-right: 2em;
    font-weight: lighter;
  }

  .navigation {
    display: flex;
  }
`

const NavLinks = () => {
  return (
    <Styled>
      <Link to="/">
        <h5>Untrip</h5>
      </Link>
      <Link to="/food-drink">
        <h5>Food & Drink</h5>
      </Link>
      <Link to="/entertainment">
        <h5>Entertainment</h5>
      </Link>
      <Link to="/culture">
        <h5>Culture</h5>
      </Link>
      <Link to="/signin">
        <h5>Sign in</h5>
      </Link>
    </Styled>
  )
}

export default NavLinks
