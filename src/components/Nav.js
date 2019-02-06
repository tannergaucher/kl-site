import React from 'react'
import styled from 'styled-components'
import Link from './styles/Link'

const Styled = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  color: white;
  height: 60px;
  padding-left: ${props => props.theme.spacing};
  padding-right: ${props => props.theme.spacing};
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    margin: 0;
  }

  @media (max-width: 750px) {
    display: none;
  }
`

const Nav = () => {
  return (
    <Styled>
      <Link to="/">
        <h4>Untrip</h4>
      </Link>
    </Styled>
  )
}

export default Nav
