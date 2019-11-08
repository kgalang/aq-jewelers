import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import { Nav, Footer } from '../components'

const Main = styled.div`
  ${media.forSmallOnly`
  margin-top: 60px;
`}
`

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* GlobalStyle doesn't render something to the DOM, it just injects global styles for styled-components */}
        <GlobalStyle />
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
