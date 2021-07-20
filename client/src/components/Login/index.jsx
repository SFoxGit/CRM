import React, { useRef, useState } from "react";
import axios from "axios";
// import userContext from "../../utils/userContext";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const [join, setJoin] = useState(false)
  const setUserID = props.setUserID
  const setLoggedIn = props.setLoggedIn
  const history = useHistory()
  const loginEmail = useRef();
  const loginUsername = useRef();
  const orgCode = useRef();

  const joinOrg = async (event) => {
    event.preventDefault();
    setJoin(!join)
  }
  const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = loginEmail.current.value;
    const password = loginUsername.current.value;

    if (email && password) {
      await axios.post('/api/user/login', { email, password }, { withCredentials: true })
        .then(res => {
          setUserID(res.data.user_id)
          setLoggedIn(true);
          history.push('/')
        })
        .catch(err => console.log(err))
    }
  };
  const signupEmail = useRef();
  const signupUsername = useRef();
  const signupPassword = useRef();

  const signupFormHandler = async (event) => {
    event.preventDefault();
    const email = signupEmail.current.value;
    const username = signupUsername.current.value;
    const password = signupPassword.current.value;

    if (email && username && password) {
      await axios.post('/api/user', { email, username, password }, { withCredentials: true })
        .then(res => {
          setUserID(res.data.user_id)
          setLoggedIn(true);
          history.push('/CreateGame');
        })
        .catch(err => console.log(err))
    }
  };

  return (
    <div className="container main-content">
      <div className="row justify-content-center">
        <form className="col-4">
          <h3>Sign Up</h3>
          <div className="form-group">
            <label htmlFor="signupUsername">Username</label>
            <input ref={signupUsername} type="text" className="form-control" id="signupUsername" aria-describedby="userHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="signupEmail">Email address</label>
            <input ref={signupEmail} type="email" className="form-control" id="signupEmail" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="signupPassword">Password</label>
            <input ref={signupPassword} type="password" className="form-control" id="signupPassword" />
          </div>
          <div className="form-group">
            <label htmlFor="createOrg">Create Organization</label>
            <input type="checkbox" className="form-control" />
          </div>
          {join ?
            <>
              <div className="form-group">
                <label htmlFor="joinOrg">Join Organization</label>
                <input onChange={joinOrg} type="checkbox" className="form-control" checked />
              </div>
              <div className="form-group">
                <label htmlFor="orgCode">Organization Code</label>
                <input ref={orgCode} type="text" className="form-control" />
              </div>
            </>
            :
            <div className="form-group">
              <label htmlFor="joinOrg">Join Organization</label>
              <input onChange={joinOrg} type="checkbox" className="form-control" />
            </div>
          }
          <div className="btn-parent">
            <button onClick={signupFormHandler} type="submit" className="btn">Sign Up</button>
          </div>
        </form>
        <form className="col-4">
          <h3>Log In</h3>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input ref={loginEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input ref={loginUsername} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="btn-parent">
            <button onClick={loginFormHandler} type="submit" className="btn">Log In</button>
          </div>
        </form>
      </div>
    </div >
  )
}
