import React from 'react'
import { Nav } from './'
import styled from 'styled-components'

const StyledNav = styled(Nav)`
  a {
    &:after {
      background-color: ${props => props.theme.secondaryColor} !important;
    }
  }
`

export const NavBar = () => {
  return <StyledNav />
}
