import styled from 'styled-components'
import Link from './Link'

const NavLink = styled(Link)`
  color: grey;
  font-size: 18px;
  transition: ease-in-out 0.2s;
  letter-spacing: 0.02em;
  font-weight: lighter;
  text-transform: ${props => (props.uppercase ? 'uppercase' : '')};
  &:hover {
    color: white;
    transition: ease-in-out 0.2s;
    transform: scale(1.05);
  }
`

export default NavLink
