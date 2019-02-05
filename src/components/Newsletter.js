import React from 'react'
import styled from 'styled-components'

const Styled = styled.form`
  display: flex;
  input {
    border: 3px solid black;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-right: none;
    background: rgba(0, 0, 0, 0.1);
    color: black;
    font-size: 16px;
    padding-left: 0.3em;
    transition: 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
      transition: 0.2s;
    }
  }
`

const Button = styled.button`
  padding: ${props => props.theme.spacing};
  background: black;
  border: 3px solid black;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  color: white;
  letter-spacing: 0.03em;
  font-size: 12px;
  transition: 0.2s;
`

const Newsletter = () => {
  return (
    <Styled>
      <input />
      <Button>Submit</Button>
    </Styled>
  )
}

export default Newsletter
