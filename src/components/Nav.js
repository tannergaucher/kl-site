import React from 'react'
import styled from 'styled-components'

import { Menu } from 'styled-icons/feather/Menu'

const StyledNav = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
`

class Nav extends React.Component {
  render() {
    return (
      <StyledNav>
        <Menu size={35} color="white" />
      </StyledNav>
    )
  }
}

export default Nav
