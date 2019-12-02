import React from 'react'
import styled from 'styled-components'

const AccordionCardContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  &:last-child {
    border: none;
  }
  padding: 20px;
`

const AccordionHeader = styled.div`
  h2 {
    text-align: center;
    padding: 1rem;
    cursor: pointer;
    margin: 0;
  }
`

const AccordionText = styled.div`
  max-height: ${props => (props.open ? '100vh' : '0')};
  margin-bottom: 0;
  overflow: hidden;
  transition: max-height 0.35s ease-in-out;
  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }
  a {
    color: ${props => props.theme.primaryColor};
    transition: ${props => props.theme.defaultTransition};
    &:hover {
      border-bottom: 1px dotted;
    }
  }
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
          <h2>{this.props.title}</h2>
        </AccordionHeader>
        <AccordionText open={this.state.open}>
          <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
        </AccordionText>
      </AccordionCardContainer>
    )
  }
}

export default AccordionCard
