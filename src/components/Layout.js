import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import { Nav, Footer } from '../components'

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* GlobalStyle doesn't render something to the DOM, it just injects global styles for styled-components */}
        <GlobalStyle />
        <Nav />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}
