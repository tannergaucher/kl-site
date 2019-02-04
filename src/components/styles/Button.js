import styled from 'styled-components'

const Button = styled.button`
  color: white;
  background: black;
  border: 2px solid white;
  letter-spacing: 2px;
  border-radius: 2px;
  padding: ${props => props.theme.spacing};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export default Button
