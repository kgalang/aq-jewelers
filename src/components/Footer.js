import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Container } from '../components'
import { Link } from 'gatsby'
import InitialsLogo from '../assets/primary-logo.svg'
import { media } from '../styles'

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
  background: ${props => props.theme.primaryColor};
  * {
    color: ${props => props.theme.white};
  }
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    flex: 1;
  }
`

const Address = styled.div`
  ${media.forSmallOnly`
    flex: 1 100%;
    text-align: center;
    p:last-child {
      margin: 0;
    }
  `}
  ${media.forMediumUp`
    order: 1;
  `}
`

const Nav = styled.div`
  text-align: right;
  ${media.forSmallOnly`
    display: none;
  `}
  ${media.forMediumUp`
    order: 3;
  `}
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.forSmallOnly`
    flex: 1 100%;
    margin-bottom: 2rem;
  `}
  ${media.forMediumUp`
    order: 2;
  `}
`

const Logo = styled(InitialsLogo)`
  fill: ${props => props.theme.white};
  height: 5rem;
`

const FooterDisclaimer = styled.div`
  margin-top: 2rem;
  text-align: center;
  p {
    margin: 0;
  }
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
            address_1 {
              html
            }
            address_2 {
              html
            }
            email_address {
              text
              html
            }
            phone {
              text
              html
            }
            additional_footer_text {
              html
            }
          }
        }
      }
    `}
    render={data => (
      <FooterContainer>
        <Container>
          <FooterContent>
            <FooterInfo>
              <LogoContainer>
                <Logo></Logo>
              </LogoContainer>
              <Address>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.prismicFooter.data.address_1.html,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.prismicFooter.data.address_2.html,
                  }}
                />
                <p>
                  <a
                    href={
                      'mailto:' + data.prismicFooter.data.email_address.text
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.prismicFooter.data.email_address.html,
                      }}
                    />
                  </a>
                </p>
                <p>
                  {/* replace() removing any parentheses or whitespace to create href for phone number */}
                  <a
                    href={
                      'tel:+1' +
                      data.prismicFooter.data.phone.text.replace(/[^+\d]+/g, '')
                    }
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.prismicFooter.data.phone.html,
                      }}
                    />
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
            </FooterInfo>
            <FooterDisclaimer>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicFooter.data.additional_footer_text.html,
                }}
              />
            </FooterDisclaimer>
          </FooterContent>
        </Container>
      </FooterContainer>
    )}
  />
)
