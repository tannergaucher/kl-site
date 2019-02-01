import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import settings from '../images/settings.svg'

const Icon = styled.img`
  height: 25px;
  width: 25px;
`

const Styled = styled.header`
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 2;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: ${props => props.theme.spacing};
  margin-right: ${props => props.theme.spacing};

  h6 {
    margin: 0;
    font-size: 16px;
    color: #696969;
  }
`

const Nav = () => (
  <Styled>
    <Link style={{ textDecoration: 'none' }} to="/">
      <h6>Untrip</h6>
    </Link>
    <h6 style={{ fontWeight: 'lighter' }}>Sign Up</h6>
    {/* <Icon src={settings} /> */}
  </Styled>
)

export default Nav
