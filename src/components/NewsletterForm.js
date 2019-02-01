import React, { Component } from 'react'

import Form from './styles/Form'
import Button from './styles/Button'

class NewsletterForm extends Component {
  state = {}

  render() {
    return (
      <>
        <Form onSubmit={e => e.preventDefault()}>
          <input placeholder="Email Address" type="email" name="email" />
          <Button type="submit">SUBMIT</Button>
        </Form>
      </>
    )
  }
}

export default NewsletterForm
