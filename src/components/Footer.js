import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Container } from '../components'
import { Link } from 'gatsby'
import InitialsLogo from '../assets/aq-logo.svg'

const ROUTES = [
  {
    route: '/',
    text: 'Home',
    as: Link,
  },
  {
    route: '/services',
    text: 'Services',
    as: Link,
  },
  {
    route: '/about',
    text: 'About',
    as: Link,
  },
  {
    route: '/contact',
    text: 'Contact',
    as: Link,
  },
]

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
  margin: -1rem 0 2rem 0;
`

const NavLinkStyles = css`
  color: ${props => props.theme.white} !important;
  text-decoration: none;
  position: relative;
  cursor: pointer;
`

const createRouteLink = as => styled(as)`
  ${NavLinkStyles};
`

const RouteLinkContainer = styled.div`
  margin-bottom: 1rem;
`

export const Footer = ({ routes = ROUTES }) => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        prismicFooter {
          data {
            address_line_1 {
              text
            }
            address_line_2 {
              text
            }
            email {
              text
            }
            phone_number {
              text
            }
            footer_text {
              text
            }
          }
        }
      }
    `}
    render={data => (
      <FooterContainer>
        <Container>
          <FooterRow>
            <Address>
              <p>{data.prismicFooter.data.address_line_1.text}</p>
              <p>{data.prismicFooter.data.address_line_2.text}</p>
              <p>
                <a href={'mailto:' + data.prismicFooter.data.email.text}>
                  {data.prismicFooter.data.email.text}
                </a>
              </p>
              <p>
                {/* replace() removing any parentheses or whitespace to create href for phone number */}
                <a
                  href={
                    'tel:+1' +
                    data.prismicFooter.data.phone_number.text.replace(
                      /[^+\d]+/g,
                      '',
                    )
                  }
                >
                  {data.prismicFooter.data.phone_number.text}
                </a>
              </p>
            </Address>
            <Nav>
              {routes.map(
                ({ route, text, as = 'a', renderLinkContent, ...rest }) => {
                  // The controls what the link renders as so it works with Reach, React Router, and normal
                  const RouteLink = createRouteLink(as)

                  return (
                    <RouteLinkContainer key={route}>
                      <RouteLink to={route} {...rest}>
                        {renderLinkContent ? renderLinkContent() : text}
                      </RouteLink>
                    </RouteLinkContainer>
                  )
                },
              )}
            </Nav>
          </FooterRow>
          <FooterRow>
            <LogoContainer>
              <Logo></Logo>
              <p>{data.prismicFooter.data.footer_text.text}</p>
            </LogoContainer>
          </FooterRow>
        </Container>
      </FooterContainer>
    )}
  />
)
