import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../styles'

// Placeholder for pending style updates
const AboutContainer = styled.div``

const AboutRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const AboutColumn = styled.div`
  flex-basis: 100%;
  ${media.forLargeUp`
    flex: 1;
    p {
      padding-right: 0.5rem;
    }
    img {
      width: 100%;
      padding-left: 0.5rem;
    }
  `}
  img {
    width: 100%;
  }
`

export const AboutContent = ({ header, body, imgSrc, imgTitle }) => {
  return (
    <AboutContainer>
      <AboutRow>
        <AboutColumn>
          <h1>{header}</h1>
        </AboutColumn>
      </AboutRow>
      <AboutRow>
        <AboutColumn>
          <p>{body}</p>
        </AboutColumn>
        <AboutColumn>
          <img src={imgSrc} alt={imgTitle} />
        </AboutColumn>
      </AboutRow>
    </AboutContainer>
  )
}

AboutContent.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
