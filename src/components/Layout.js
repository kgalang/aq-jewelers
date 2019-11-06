import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import { Nav, Footer } from '../components'

const LayoutWrapper = styled.div`
  min-height: 100vh;
`

export const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <ThemeProvider theme={theme}>
        <div>
          {/* GlobalStyle doesn't render something to the DOM, it just injects global styles for styled-components */}
          <GlobalStyle />
          <Nav />
          {children}
          <Footer />
        </div>
      </ThemeProvider>
    </LayoutWrapper>
  )
}
