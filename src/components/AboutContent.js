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
  h1 {
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
  }
  ${media.forSmallMediumOnly`
    p {
      margin-bottom: 2rem;
    }
  `};

  ${media.forLargeUp`
    flex: 1;
    p {
      padding-right: 2rem;
    }
    img {
      padding-left: 2rem;
    }
  `}
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
