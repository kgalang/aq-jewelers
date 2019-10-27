import React from 'react'
import styled from 'styled-components'
import AccordionCard from './AccordionCard'

const AccordionContainer = styled.div``

// const AccordionCard = styled.div`
//   border-bottom: 1px solid ${props => props.theme.primaryColor};
// `

class AccordionContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayContent: true,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <AccordionCard
          header="Custom Designs"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
          open="true"
        ></AccordionCard>
        <AccordionCard
          header="Jewlery Repair"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
          open="false"
        ></AccordionCard>
        <AccordionCard
          header="Diamond Process"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
          open="false"
        ></AccordionCard>
        <AccordionCard
          header="Jewlery Care"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat."
          open="false"
        ></AccordionCard>
      </div>
    )
  }
}

export const Accordion = () => {
  return (
    <div>
      <AccordionContainer>
        <AccordionContent></AccordionContent>
      </AccordionContainer>
    </div>
  )
}
