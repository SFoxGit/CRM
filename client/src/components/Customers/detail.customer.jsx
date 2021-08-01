import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import AddContact from '../Contact/add.contact'
import Contact from '../Contact/contact'

export default function CustomerDetail(props) {
  const customer = props.customer
  const [showForm, setShowForm] = useState(false)
  const [showContacts, setShowContacts] = useState(false)
  // const userID = props.userID
  const [custData, setCustData] = useState([])
  const noteRef = useRef();

  const editNote = (e) => {
    e.preventDefault();
    axios.put(`/api/customer/${customer}`, { note: noteRef.current.value})
    .then(res => {
      console.log("updated customer note")
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get(`/api/customer/${customer}`)
      .then(res => {
        console.log(res.data);
        setCustData(res.data)
      })
      .catch(err => console.log(err))
  }, [customer])
  return (
    <Container>
      <Row>
        <Col>{custData.name}</Col>
        <Col>{custData.address}</Col>
        <Col>{custData.city}</Col>
        <Col>{custData.state}</Col>
        <Col>{custData.industry}</Col>
        <Col>{custData.phone}</Col>
      </Row>
      {custData.note ?
        <>
          <Row>
            <InputGroup>
              <InputGroup.Text>Note:</InputGroup.Text>
              <FormControl ref={noteRef} as="textarea" aria-label="With textarea" defaultValue={custData.note} />
            </InputGroup>
          </Row>
          <Row>
            <Button onClick={(e) => editNote(e)}>Edit Note</Button>
          </Row>
        </>
        :
        <>
          <Row>
            <InputGroup>
              <InputGroup.Text>Note:</InputGroup.Text>
              <FormControl ref={noteRef} as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Row>
          <Row>
            <Button onClick={(e) => editNote(e)}>Add Note</Button>
          </Row>
        </>
      }
      {showForm ?
        <AddContact setShowForm={setShowForm} id={custData.id} />
        :
        <>
          <Button onClick={() => setShowForm(true)}>Add Contact</Button>
          <Button onClick={() => setShowContacts(true)}>View Contacts</Button>
        </>
      }
      {showContacts ?
        <>
          {custData.contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
          <Button onClick={() => setShowContacts(false)}>Hide Contacts</Button>
        </>
        :
        null
      }
    </Container>
  )
}
