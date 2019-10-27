import React from 'react'
import styled from 'styled-components'

const AccordionCardContainer = styled.div`
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  &:last-child {
    border: none;
  }
`

const AccordionHeader = styled.h1`
  color: ${props => props.theme.primaryColor}
  text-align: center;
  padding: 1rem;

  label:hover {
    cursor: pointer;
  }

  input {
    display: none;
  }
`

// Placeholder for any necessary styles
const AccordionText = styled.p``

class AccordionCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayContent: JSON.parse(this.props.open),
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
      <AccordionCardContainer>
        <AccordionHeader>
          <label>
            {this.props.header}
            <input
              name="displayContent"
              type="checkbox"
              checked={this.state.displayContent}
              onChange={this.handleInputChange}
            />
          </label>
        </AccordionHeader>
        {this.state.displayContent && (
          <AccordionText>{this.props.text}</AccordionText>
        )}
      </AccordionCardContainer>
    )
  }
}

export default AccordionCard
