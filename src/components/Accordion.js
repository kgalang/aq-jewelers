import React from 'react'
import AccordionCard from './AccordionCard'

class AccordionContainer extends React.Component {
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
        {this.props.content.map(function(content, index) {
          return (
            <AccordionCard
              key={index}
              title={content.title}
              body={content.body}
              open={false}
            />
          )
        })}
      </div>
    )
  }
}

export const Accordion = ({ content }) => {
  return <AccordionContainer content={content} />
}
