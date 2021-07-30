import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import AddContact from '../Contact/add.contact'

export default function CustomerDetail(props) {
  const customer = props.customer
  const [showForm, setShowForm] = useState(false)
  // const userID = props.userID
  const [custData, setCustData] = useState([])
  useEffect(() => {
    axios.get(`/api/customer/${customer}`)
      .then(res => {
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
      {showForm ?
        <AddContact id={custData.id} />
        :
        <Button onClick={() => setShowForm(true)}>Add Contact</Button>
      }
    </Container>
  )
}
