import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Contact(props) {
  const contact = props.contact
  return (
    <Container>
      <Row>
        <Col>{contact.name}</Col>
        <Col>{contact.phone}</Col>
        <Col>{contact.title}</Col>
      </Row>
    </Container>
  )
}
