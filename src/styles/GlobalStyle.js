import { createGlobalStyle } from 'styled-components'
import { media } from './media'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: ${props => props.theme.defaultFontSize};

    ${media.forSmallOnly`
      font-size: ${props => props.theme.defaultMobileFontSize};
    `}
  }

  body {
    margin: 0;
    font-family: ${props => props.theme.defaultFont};
    color: ${props => props.theme.defaultFontColor};

    h1, h2, h3, h4, h5, h6 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      color: ${props => props.theme.defaultFontColor};
      font-weight: 400;
    }

    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    hr {
      box-sizing: content-box;
      height: 0;
      overflow: visible;
    }

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    a {
      color: ${props => props.theme.linkColor};
      text-decoration: none;

      &:visited {
        color: ${props => props.theme.linkColor};
      }
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
      margin-bottom: 0;
    }
  }
`
