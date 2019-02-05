import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Styled = styled.nav`
  height: 47.5px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  color: white;
`

const NavLink = styled(Link)`
  color: grey;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  &:hover {
    color: white;
    transition: 0.2s;
  }
  h6 {
    font-weight: lighter;
    font-size: 10px;
    letter-spacing: -3%;
  }
`

class BottomBar extends React.Component {
  render() {
    return (
      <Styled>
        <div className="nav-icon">
          <NavLink to="/">
            <h6>Untrip</h6>
          </NavLink>
        </div>
        <div className="nav-icon">
          <NavLink to="/guide">
            <h6>Guide</h6>
          </NavLink>
        </div>
        <div className="nav-icon">
          <NavLink to="/favorites">
            <h6>Favorites</h6>
          </NavLink>
        </div>
      </Styled>
    )
  }
}

export default BottomBar
