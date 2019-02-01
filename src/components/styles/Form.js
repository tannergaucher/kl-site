import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  input {
    font-family: ${props => props.theme.font};
    border: 2px solid lightgrey;
    border-radius: 2px;
  }
`

export default Form
