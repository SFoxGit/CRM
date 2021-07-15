import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";


function App() {
  const [test, setTest] = useState([])
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
    </Router>
  );
}

export default App;
