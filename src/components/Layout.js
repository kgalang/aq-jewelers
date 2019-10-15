import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import { NavBar } from './'

export const Layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          {/* GlobalStyle doesn't render something to the DOM, it just injects global styles for styled-components */}
          <GlobalStyle />
          <NavBar />
          {children}
        </div>
      </ThemeProvider>
    </div>
  )
}
