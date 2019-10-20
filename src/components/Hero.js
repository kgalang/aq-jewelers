import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const HeroContainer = styled.div`
  height: 20rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${props => props.backgroundImage}) no-repeat top;
  background-size: cover;
`

const HeroContentContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
`

const HeroHeaderText = styled.h1`
  color: ${props => props.theme.white};
  font-size: 3rem;
  margin-bottom: 1rem;

  ${media.forSmallMediumOnly`
    font-size: 2rem;
  `}
`

export const Hero = ({ backgroundImage }) => {
  return (
    <HeroContainer backgroundImage={backgroundImage}>
      <HeroContentContainer>
        <HeroHeaderText>Lorum Ipsum</HeroHeaderText>
      </HeroContentContainer>
    </HeroContainer>
  )
}
