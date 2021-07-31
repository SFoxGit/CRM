import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
// import { useHistory } from "react-router";

export default function AddContact(props) {
  // const history = useHistory();
  const setShowForm = props.setShowForm
  const nameRef = useRef();
  const titleRef = useRef();
  const phoneRef = useRef();
  const id = props.id
  const submit = async (e) => {
    e.preventDefault();
    await axios.post('/api/contact', {
      name: nameRef.current.value, 
      phone: phoneRef.current.value,  
      title: titleRef.current.value,
      company: id,
    })
    .then(res => {
      console.log("added")
      setShowForm(false)
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input ref={nameRef} type="text" className="form-control" aria-describedby="" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" ref={phoneRef} name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required />
          <small>Format: 123-456-7890</small>
        </div>
        <div className="form-group">
          <label>Title</label>
          <input ref={titleRef} type="text" className="form-control" aria-describedby="" />
        </div>
        <div className="btn-parent">
          <Button onClick={submit} type="submit" className="btn">Submit</Button>
        </div>
        <div className="btn-parent">
          <Button onClick={() => setShowForm(false)} type="submit" className="btn">Cancel</Button>
        </div>
      </form>
    </div>
  )
}
