import React from 'react'
import styled from 'styled-components'
import NavLink from '../components/styles/NavLink'

import { Instagram } from 'styled-icons/feather/Instagram'
import { Facebook } from 'styled-icons/feather/Facebook'
import { Twitter } from 'styled-icons/feather/Twitter'
import { MessageCircle } from 'styled-icons/feather/MessageCircle'

const Styled = styled.footer`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: ${props => props.theme.spacing};
  padding-bottom: ${props => props.theme.spacing};

  background: black;
  color: white;

  h6 {
    margin: 0;
  }
`

const Footer = () => (
  <Styled>
    <NavLink to="/">
      <Instagram size={25} />
    </NavLink>
    <NavLink to="/">
      <Facebook size={25} />
    </NavLink>
    <NavLink to="/">
      <Twitter size={25} />
    </NavLink>
    <NavLink to="/">
      <MessageCircle size={25} />
    </NavLink>

    <NavLink to="/contact" uppercase="true">
      <h6>Contact</h6>
    </NavLink>
    <NavLink to="/about" uppercase="true">
      <h6>About</h6>
    </NavLink>
    <NavLink to="/faq" uppercase="true">
      <h6>F.A.Q.</h6>
    </NavLink>
    <NavLink to="/friends" uppercase="true">
      <h6>Friends</h6>
    </NavLink>
    <NavLink to="/" uppercase="true">
      <h6>KL Inside Guide</h6>
    </NavLink>

    {/* <div className="footer-legal">
      <h6>&#169; Some Company</h6>
    </div> */}
  </Styled>
)

export default Footer
