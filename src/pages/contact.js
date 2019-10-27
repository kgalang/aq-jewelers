import React from 'react'
import { Layout } from '../components/Layout'

const NotFound = () => (
  <Layout>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <label htmlFor="name">
        Name: <input type="text" name="name" />
      </label>
      <label htmlFor="email">
        Your Email: <input type="email" name="email" />
      </label>
      <label htmlFor="message">
        Message: <textarea name="message" />
      </label>
      <button type="submit">Submit</button>
    </form>
  </Layout>
)

export default NotFound
