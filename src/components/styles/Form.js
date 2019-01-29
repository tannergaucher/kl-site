import styled from 'styled-components'
import { space } from 'styled-system'

const Form = styled.form`
  ${space};
  display: flex;

  input {
    font-family: ${props => props.theme.font};
    background: papayawhip;
    font-size: 12px;
    padding: 0.8em;
    border: 1px solid lightgrey;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`

export default Form
