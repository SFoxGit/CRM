import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import AddContact from '../Contact/add.contact'

export default function CustomerDetail(props) {
  const customer = props.customer
  const [showForm, setShowForm] = useState(false)
  const [showContacts, setShowContacts] = useState(false)
  // const userID = props.userID
  const [custData, setCustData] = useState([])
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
        <Col>{custData.Contacts}</Col>
      </Row>
      {showForm ?
        <AddContact setShowForm={setShowForm} id={custData.id} />
        :
        <>
          <Button onClick={() => setShowForm(true)}>Add Contact</Button>
          <Button onClick={() => setShowContacts(true)}>View Contacts</Button>
        </>
      }
    </Container>
  )
}
