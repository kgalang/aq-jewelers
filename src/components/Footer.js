import React from 'react'
import styled from 'styled-components'
import { Container } from '../components'
import InitialsLogo from '../assets/aq-logo.svg'

const FooterContainer = styled.div`
  margin-top: 2rem;
  background: ${props => props.theme.primaryColor};
  * {
    color: ${props => props.theme.white};
  }
`

const FooterRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`

const Aside = styled.div`
  flex: 1;
`

const Address = styled(Aside)`
  flex: 1;
`

const Nav = styled(Aside)`
  flex: 1;
  text-align: right;
`

const LogoContainer = styled.div`
  text-align: center;
`

const Logo = styled(InitialsLogo)`
  fill: ${props => props.theme.white};
  height: 5rem;
  margin: -2rem 0 2rem 0;
`

export const Footer = ({ content }) => (
  <FooterContainer>
    {console.log(content)}
    <Container>
      <FooterRow>
        <Address>
          <p>{content.address_line_1.text}</p>
          <p>{content.address_line_2.text}</p>
          <p>
            <a href={'mailto:' + content.email.text}>{content.email.text}</a>
          </p>
          <p>
            {/* replace() removing any parentheses or whitespace to create href for phone number */}
            <a
              href={
                'tel:+1' + content.phone_number.text.replace(/[^+\d]+/g, '')
              }
            >
              {content.phone_number.text}
            </a>
          </p>
        </Address>
        <Nav>
          <p>{content.address_line_1.text}</p>
          <p>{content.address_line_2.text}</p>
          <p>
            <a href={'mailto:' + content.email.text}>{content.email.text}</a>
          </p>
          <p>
            {/* replace() removing any parentheses or whitespace to create href for phone number */}
            <a
              href={
                'tel:+1' + content.phone_number.text.replace(/[^+\d]+/g, '')
              }
            >
              {content.phone_number.text}
            </a>
          </p>
        </Nav>
      </FooterRow>
      <FooterRow>
        <LogoContainer>
          <Logo></Logo>
          <p>{content.footer_text.text}</p>
        </LogoContainer>
      </FooterRow>
    </Container>
  </FooterContainer>
)
