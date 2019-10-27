import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Hero, Accordion } from '../components'
import HeroImage from '../../static/Hero_1920.jpg'

const Services = () => (
  <Layout>
    <Hero backgroundImage={HeroImage} text="Services" />
    <Accordion></Accordion>
  </Layout>
)

Services.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Services
