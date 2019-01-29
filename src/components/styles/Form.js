import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    font-family: ${props => props.theme.font};
    font-size: 12px;
    padding: 0.8em;
    border: 1px solid black;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`

export default Form
