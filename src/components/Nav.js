import React from 'react'
import styled from 'styled-components'
import { Menu } from 'styled-icons/feather/Menu'

const Styled = styled.nav`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
`

class Nav extends React.Component {
  render() {
    return <Styled>{/* <Menu size={35} color="white" /> */}</Styled>
  }
}

export default Nav
