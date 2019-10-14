import { css } from 'styled-components'
import BREAKPOINTS from './breakpoints'

// This creates the media templates, which allows for simple
// breakpoint usage inside styled-components, e.g.:
//
// ${media.phone`
//   font-size: 1.6rem;
// `};
//
// ${media.min_tablet`
//   display: flex;
// `};
//
// Edit or add breakpoints inside constants/breakpoints.js

const media = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `

  acc[`min_${label}`] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})

export default media
