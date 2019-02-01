import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'

import cutlery from '../images/cutlery.svg'
import cheers from '../images/cheers.svg'
import confetti from '../images/confetti.svg'

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
          <IconLink to="/food">
            <Icon src={cutlery} />
            <h6>Food</h6>
          </IconLink>
        </div>

        <div className="nav-icon">
          <IconLink to="/drink">
            <Icon src={cheers} />
            <h6>Drink</h6>
          </IconLink>
        </div>
        <div className="nav-icon">
          <IconLink to="/events">
            <Icon src={confetti} />
            <h6>Events</h6>
          </IconLink>
        </div>
      </Styled>
    )
  }
}

export default BottomBar
