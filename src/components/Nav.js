import React from 'react'
import styled from 'styled-components'
import NavLink from '../components/styles/NavLink'

const Styled = styled.header`
  top: 0;
  left: 0;
  right: 0;
  background: black;
  color: white;
  z-index: 2;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${props => props.theme.spacing};
  padding-right: ${props => props.theme.spacing};

  h6 {
    margin: 0;
    color: white;
    font-size: 16px;
  }

  .sign-up {
    font-weight: lighter;
  }
`

const Nav = () => (
  <Styled>
    <NavLink to="/">
      <h6>Untrip</h6>
    </NavLink>
    <h6 className="sign-up">Sign Up</h6>
  </Styled>
)

export default Nav
