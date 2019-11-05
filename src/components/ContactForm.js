import React from 'react'
import styled from 'styled-components'
import { Button } from '../components'

const ContactFormContainer = styled.div`
  margin-top: 2rem;

  h1 {
    text-align: center;
  }

  label,
  input,
  textarea {
    font-size: 1.5rem;
  }

  input,
  textarea {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid ${props => props.theme.primaryColor};
  }

  textarea {
    resize: none;
  }

  button {
    margin-bottom: 1rem;
    float: right;
  }
`

export const ContactForm = () => (
  <ContactFormContainer>
    <h1>Contact</h1>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <label htmlFor="name">
        Name: <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="email">
        Email: <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="message">
        Message: <textarea name="message" id="message" rows="5" />
      </label>
      {/* <button type="submit">Submit</button> */}
      <Button type="submit">Submit</Button>
    </form>
  </ContactFormContainer>
)

export default ContactForm
