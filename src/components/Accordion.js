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
    let content = this.props.content
    return (
      <div>
        <AccordionCard
          key={content.service_name.text}
          title={content.service_name.text}
          body={content.service_description.text}
          open={false}
        />
      </div>
    )
  }
}

export const Accordion = ({ content }) => {
  return <AccordionContainer content={content} />
}
