import React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const ContentContainer = styled.div`
  padding: 5% 10%;

  ${media.forSmallOnly`
    padding: 10%;
  `}
`

export const Container = props => {
  return <ContentContainer>{props.children}</ContentContainer>
}
