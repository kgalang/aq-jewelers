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
    let services = this.props.services
    return (
      <div>
        {services.map((service, index) => (
          <AccordionCard
            key={
              index +
              ': ' +
              service.related_service.document[0].data.service_name.text
            }
            title={service.related_service.document[0].data.service_name.text}
            body={
              service.related_service.document[0].data.service_description.text
            }
            open={false}
          />
        ))}
      </div>
    )
  }
}

export const Accordion = ({ services }) => {
  return <AccordionContainer services={services} />
}
