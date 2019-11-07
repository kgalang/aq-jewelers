import React from 'react'
import styled from 'styled-components'
import { Container } from '../components'

const FooterContainer = styled.div`
  margin-top: 2rem;
  background: ${props => props.theme.primaryColor};
  * {
    color: ${props => props.theme.white};
  }
`

export const Footer = ({ content }) => (
  <FooterContainer>
    <Container>
      <p>{content.address_line_1.text}</p>
      <p>{content.address_line_2.text}</p>
      <p>
        <a href={'mailto:' + content.email.text}>{content.email.text}</a>
      </p>
      <p>
        {/* replace() removing any parentheses or whitespace to create href for phone number */}
        <a href={'tel:+1' + content.phone_number.text.replace(/[^+\d]+/g, '')}>
          {content.phone_number.text}
        </a>
      </p>
    </Container>
  </FooterContainer>
)
