import React from 'react'
import styled from 'styled-components'
import { Container } from '../components'

const FooterContainer = styled.div`
  background: ${props => props.theme.primaryColor};
  * {
    color: ${props => props.theme.white};
  }
`

export const Footer = () => (
  <FooterContainer>
    <Container>
      <p>42841 Creek View Plaza #125</p>
      <p>Ashburn, VA 20147</p>
      <p>
        <a href="mailto:aqj.2015@gmail.com">aqj.2015@gmail.com</a>
      </p>
      <p>
        <a href="tel:+17037268938">(703) 726-8938</a>
      </p>
    </Container>
  </FooterContainer>
)
