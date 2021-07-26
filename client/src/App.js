import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Customers from "./components/Customers/customers";


function App() {
  const [test, setTest] = useState([])
  const [loggedIn, setLoggedIn] = useState();
  const [userID, setUserID] = useState();
  const [organization, setOrganization] = useState();

  useEffect(() => {
    axios.get('/api/user')
      .then(res => {
        setTest(res.data)
      })
  }, [])
  return (
    <Router>
      <Header />
      <p>{test}</p>
      <p>{organization}</p>
      <p>{loggedIn}</p>
      <p>{userID}</p>
      <Switch>
        <Route exact path="/login">
          <Login 
          setUserID={setUserID} 
          setLoggedIn={setLoggedIn} 
          setOrganization={setOrganization}
          organization={organization}
          />
        </Route>
        <Route exact path="/customers">
          <Customers />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
