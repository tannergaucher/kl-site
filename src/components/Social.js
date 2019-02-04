import React from 'react'
import styled from 'styled-components'

import Link from '../components/styles/Link'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import messenger from '../images/messenger.svg'
import twitter from '../images/twitter.svg'
import like from '../images/like.svg'

const Styled = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  margin-bottom: ${props => props.theme.spacing};
`

// prettier-ignore
const Icon = styled.img`
  height: 22px;
  width: 22px;
`

// prettier-ignore
const Button = styled.button`
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  border: none;
  border-radius: 2px;
  margin-right: ${props => props.theme.spacing};
  /* margin-bottom: ${props => props.theme.spacing}; */
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.15);
  }
`

const Social = () => (
  <Styled>
    <Button
      style={{
        backgroundImage:
          'linear-gradient(270deg, #BC32A4 0%, #E03768 50%, #F67C33 100%)',
      }}
    >
      <Link to="#">
        <Icon src={instagram} />
      </Link>
    </Button>
    <Button style={{ background: '#3c5a99' }}>
      <Link to="#">
        <Icon src={facebook} />
      </Link>
    </Button>
    <Button style={{ background: '#1E88E5' }}>
      <Link to="#">
        <Icon src={messenger} />
      </Link>
    </Button>

    <Button style={{ background: '#1da1f2' }}>
      <Link to="#">
        <Icon src={twitter} />
      </Link>
    </Button>

    <Button style={{ background: 'red' }}>
      <Link to="#">
        <Icon src={like} />
      </Link>
    </Button>
  </Styled>
)

export default Social
