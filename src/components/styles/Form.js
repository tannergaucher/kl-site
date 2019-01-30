import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    font-family: ${props => props.theme.font};
    font-size: 12px;
    border: none;
    padding: 0.8em;
  }
`

export default Form
