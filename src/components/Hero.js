import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'
import { Button } from '../components'

const HeroContainer = styled.div`
  height: 50vh;
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${props => props.backgroundImage}) no-repeat top left;
  background-size: cover;

  ${media.forSmallMediumOnly`
    height: 250px;
  `}
`

const HeroContentContainer = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.forSmallMediumOnly`
    height: 100%;
    width: 100%;
  `}
`

const HeroHeaderText = styled.h1`
  color: ${props => props.theme.white};
  font-size: 3rem;
  padding: 2rem 0;

  ${media.forSmallOnly`
    font-size: 3rem;
  `};
`

export const Hero = ({ backgroundImage, text, buttonText }) => {
  return (
    <HeroContainer backgroundImage={backgroundImage}>
      <HeroContentContainer>
        {text && <HeroHeaderText>{text}</HeroHeaderText>}
        {buttonText && <div><Button>{buttonText}</Button></div>}
      </HeroContentContainer>
    </HeroContainer>
  )
}
