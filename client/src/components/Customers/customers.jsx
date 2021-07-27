import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import Button from 'react-bootstrap/Button'

export default function Customers(props) {
  const [customers, setCustomers] = useState([])
  useEffect(() => {
    axios.get('/api/customer')
      .then(res => {
        setCustomers(res.data)
      })
  }, [])
  return (
    <div>
      {customers.length ?
        <Table striped bordered hover variant="dark" className="sortable">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Industry</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(element => (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>{element.city}</td>
                <td>{element.state}</td>
                <td>{element.industry}</td>
                <td>{element.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        :
        null
    }
    <Button href="/addcustomer" variant="dark">Add Customer</Button>
      
    </div>
  )
}
