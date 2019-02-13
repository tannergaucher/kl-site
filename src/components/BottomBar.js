import React from 'react'
import styled from 'styled-components'
import Link from '../components/styles/Link'

const Styled = styled.nav`
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-around;

  h6 {
    margin: 0;
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 10px;
  }

  @media (min-width: 750px) {
    display: none;
  }
`

const BottomBar = () => (
  <Styled>
    <Link to="/">
      <h6>Home</h6>
    </Link>

    <Link to="/categories">
      <h6>Categories</h6>
    </Link>

    <Link to="/me">
      <h6>My Untrip </h6>
    </Link>
  </Styled>
)
export default BottomBar
