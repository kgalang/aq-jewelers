import React from 'react'
import styled, { css } from 'styled-components'
import { media } from '../styles'
import { Hamburger } from '../components'
import { Link } from 'gatsby'
import HorizontalLogo from '../assets/horizontal-logo.svg'
import InitialsLogo from '../assets/aq-logo.svg'

const ROUTES = [
  {
    route: '/',
    text: 'Home',
    as: Link,
    get selected() {
      return this.route === location.pathname
    },
  },
  {
    route: '/services',
    text: 'Services',
    as: Link,
    get selected() {
      return this.route === location.pathname
    },
  },
  {
    route: '/about',
    text: 'About',
    as: Link,
    get selected() {
      return this.route === location.pathname
    },
  },
  {
    route: '/contact',
    text: 'Contact',
    as: Link,
    get selected() {
      return this.route === location.pathname
    },
  },
]

const NavContainer = styled.div`
  /* height: ${props => props.theme.desktopHeaderHeight}; */
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  ${media.forSmallOnly`
    height: ${props => props.theme.mobileHeaderHeight};
    padding: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
  `}
`

const LogoContainer = styled.div`
  height: 3rem;
  margin: 1rem 0;

  ${media.forSmallOnly`
    padding: 0.3rem 0;
  `}
`

const StyledHorizontalLogo = styled(HorizontalLogo)`
  fill: ${props => props.theme.primaryColor};
  height: 100%;

  ${media.forSmallOnly`
    display: none;
  `}
`

const StyledInitialsLogo = styled(InitialsLogo)`
  display: none;

  ${media.forSmallOnly`
    fill: ${props => props.theme.primaryColor};
    height: 100%;
    display: initial;
  `}
`

const NavOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavLinkStyles = css`
  color: ${props => props.theme.primaryColor} !important;
  text-decoration: none;
  margin: 0 1.7rem;
  position: relative;
  cursor: pointer;

  ${media.forSmallOnly`
    color: ${props => props.theme.defaultFontColor} !important;
    margin-bottom: 0.25rem;
    padding: .75rem;
    margin: 0;
    font-size: ${props => props.theme.defaultFontSize};
  `}
`

const RoutesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  /* background-color: ${props => props.theme.lightBackgroundColor}; */

  div {
    border-right: 1px solid ${props => props.theme.primaryColor};
  }

  div:last-child {
    border: none;
  }

  ${media.forSmallOnly`
    position: absolute;
    height: calc(100vh - ${({ theme }) => theme.mobileHeaderHeight});
    top: ${({ theme }) => theme.mobileHeaderHeight};
    left: 0;
    background-color: ${({ theme }) => theme.white};
    width: 100%;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    padding: 1rem;
    z-index: 20;

    div {
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: none;
      border-bottom: 1px solid ${props => props.theme.primaryColor};
      padding: 1rem 0;
    }
  `}
`

const createRouteLink = as => styled(as)`
  ${NavLinkStyles};
`

export const NavComponent = ({
  routes = ROUTES,
  containerClassName = '',
  containerStyle = {},
  navOptionsStyle = {},
}) => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false)
  return (
    <NavContainer className={containerClassName} style={containerStyle}>
      <LogoContainer>
        <StyledHorizontalLogo />
        <StyledInitialsLogo />
      </LogoContainer>
      <NavOptionsContainer style={navOptionsStyle}>
        <Hamburger
          open={hamburgerOpen}
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        />
        <RoutesContainer open={hamburgerOpen}>
          {routes.map(
            ({
              route,
              text,
              as = 'a',
              selected = false,
              renderLinkContent,
              onClick = () => null,
              ...rest
            }) => {
              // The controls what the link renders as so it works with Reach, React Router, and normal
              const RouteLink = createRouteLink(as)

              return (
                <div key={route}>
                  <RouteLink
                    to={route}
                    className={selected ? 'selected' : ''}
                    onClick={() => {
                      setHamburgerOpen(false)

                      onClick({ route, text, ...rest })
                    }}
                    {...rest}
                  >
                    {renderLinkContent ? renderLinkContent() : text}
                  </RouteLink>
                </div>
              )
            },
          )}
        </RoutesContainer>
      </NavOptionsContainer>
    </NavContainer>
  )
}

export const Nav = props => <NavComponent {...props} />
