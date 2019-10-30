import React from 'react'
import styled from 'styled-components'

const AccordionCardContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  &:last-child {
    border: none;
  }
`

const AccordionHeader = styled.div`
  h1 {
    color: ${props => props.theme.primaryColor};
    text-align: center;
    padding: 1rem;
    cursor: pointer;
  }
`

// Placeholder for any necessary styles
const AccordionText = styled.p`
  display: ${props => (props.open ? 'inherit' : 'none')};
`

class AccordionCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open,
    }
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <AccordionCardContainer>
        <AccordionHeader onClick={this.toggleOpen}>
          <h1>{this.props.title}</h1>
        </AccordionHeader>
        <AccordionText open={this.state.open}>{this.props.body}</AccordionText>
      </AccordionCardContainer>
    )
  }
}

export default AccordionCard
