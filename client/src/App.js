import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login/login";
import Customers from "./components/Customers/customers";
import AddCustomer from './components/Customers/add.customer';
import CustomerDetail from "./components/Customers/detail.customer";


function App() {
  const [test, setTest] = useState([])
  const [loggedIn, setLoggedIn] = useState();
  const [userID, setUserID] = useState();
  const [organization, setOrganization] = useState();
  const [customer, setCustomer] = useState();
  const [name, setName] = useState();

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
      <p>{name}</p>
      <Switch>
        <Route exact path="/login">
          <Login
            setUserID={setUserID}
            setLoggedIn={setLoggedIn}
            setOrganization={setOrganization}
            organization={organization}
            setName={setName}
          />
        </Route>
        <Route exact path="/customers">
          <Customers
            userID={userID}
            setCustomer={setCustomer}
          />
        </Route>
        <Route exact path="/addcustomer">
          <AddCustomer userId={userID} />
        </Route>
        <Route exact path="/detailcustomer">
          <CustomerDetail customer={customer} userID={userID} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
