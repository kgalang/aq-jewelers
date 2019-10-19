import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import { Nav } from '../components/Nav'

const Placeholder = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
`

export const Layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          {/* GlobalStyle doesn't render something to the DOM, it just injects global styles for styled-components */}
          <GlobalStyle />
          <Nav />
          <Placeholder />
          {children}
        </div>
      </ThemeProvider>
    </div>
  )
}
