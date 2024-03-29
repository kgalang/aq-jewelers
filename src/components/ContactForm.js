import React from 'react'
import styled from 'styled-components'
import { Button } from '../components'
import { media } from '../styles'

const ContactFormContainer = styled.div`
  margin: 2rem 0;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
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
  }
`

const ButtonContainer = styled.div`
  text-align: right;
  ${media.forSmallOnly`
    text-align: center;
  `};
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
      <ButtonContainer>
        <Button type="submit">Submit</Button>
      </ButtonContainer>
    </form>
  </ContactFormContainer>
)

export default ContactForm
