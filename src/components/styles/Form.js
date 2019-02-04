import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  input {
    font-family: ${props => props.theme.font};
    border: none;
    border-radius: 2px;
  }
`

export default Form
