import React, { useEffect } from 'react'
import axios from "axios";
import AddCustomer from './add.customer';

export default function Customers(props) {
const userId = props.userId;
  useEffect(() => {

  }, [])
  return (
    <div>
      <AddCustomer userId={userId}/>
    </div>
  )
}
