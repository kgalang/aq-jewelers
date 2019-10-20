import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import { Nav } from '../components/Nav'

export const Layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          {/* GlobalStyle doesn't render something to the DOM, it just injects global styles for styled-components */}
          <GlobalStyle />
          <Nav />
          {children}
        </div>
      </ThemeProvider>
    </div>
  )
}
