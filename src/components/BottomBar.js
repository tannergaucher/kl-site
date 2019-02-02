import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'
import chat from '../images/chat.svg'
import directions from '../images/directions.svg'
import heart from '../images/heart.svg'

const Icon = styled.img`
  height: 18px;
  width: 18px;
  margin-top: 0.5em;
`

const IconLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    margin-top: 0.3em;
    margin-bottom: 0.5em;
    font-weight: lighter;
    font-size: 10px;
    letter-spacing: -3%;
  }
`

const Styled = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  background: black;
  color: white;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.9);
`

class BottomBar extends React.Component {
  render() {
    return (
      <Styled>
        <div className="nav-icon">
          <IconLink to="/favorites">
            <Icon src={heart} />
            <h6>Saved</h6>
          </IconLink>
        </div>
        <div className="nav-icon">
          <IconLink to="/guide">
            <Icon src={directions} />
            <h6>Guide</h6>
          </IconLink>
        </div>
        <div className="nav-icon">
          <IconLink to="/chat">
            <Icon src={chat} />
            <h6>Chat</h6>
          </IconLink>
        </div>
      </Styled>
    )
  }
}

export default BottomBar
