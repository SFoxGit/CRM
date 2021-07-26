import axios from 'axios';
import React, { useRef, useState } from 'react'

export default function AddCustomer(props) {
  const userId = props.userId;
  const company = useRef();
  const address = useRef();
  const city = useRef();
  const state = useRef();
  const industry = useRef();
  const phone = useRef();
  const [phoneNum, setPhoneNum] = useState();

  const submit = async (e) => {
    e.preventDefault();
    setPhoneNum(phone.current.value)
    await axios.post('/api/customer', {
      name: company.current.value, 
      address: address.current.value, 
      city: city.current.value,
      state: state.current.value,
      industry: industry.current.value,
      phone: phone.current.value,
      username: userId
    })
    .then(res => {
      console.log("added")
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <div>{phoneNum}</div>
      <form>
        <div className="form-group">
          <label>Company Name</label>
          <input ref={company} type="text" className="form-control" aria-describedby="" />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input ref={address} type="text" className="form-control" aria-describedby="" />
        </div>
        <div className="form-group">
          <label>City</label>
          <input ref={city} type="text" className="form-control" aria-describedby="" />
        </div>
        <div className="form-group">
          <label>State</label>
          <select ref={state}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="form-group">
          <label>Industry</label>
          <input ref={industry} type="text" className="form-control" aria-describedby="" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" ref={phone} name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required />
          <small>Format: 123-456-7890</small>
        </div>
        <div className="btn-parent">
          <button onClick={submit} type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  )
}


{/* <div className="form-group">
<label></label>
<input ref={} type="text" className="form-control" aria-describedby="" />
</div> */}