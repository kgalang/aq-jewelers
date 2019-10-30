import React from 'react'
import styled from 'styled-components'

const ContentContainer = styled.div`
  padding: 2.5% 20%;
`

export const Container = props => {
  return <ContentContainer>{props.children}</ContentContainer>
}
