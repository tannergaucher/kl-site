import styled from 'styled-components'
import Link from './Link'

const NavLink = styled(Link)`
  color: grey;
  transition: ease-in-out 0.2s;
  letter-spacing: 1.1px;
  font-weight: lighter;

  &:hover {
    color: white;
    transition: ease-in-out 0.2s;
    transform: scale(1.05);
  }
`

export default NavLink
