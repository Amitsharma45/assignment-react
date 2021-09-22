import './App.css';
import Login from './component/login.js';
import Create from './component/create.js';
import Userlist from './component/Userlist';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');
  const [data, setdata] = useState([])
  // console.log(email);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem('user')));
  }, [])

  const validform = () => {
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(validRegex)) {
      alert("hi")
      return false;
    }
    if (number.length !== 10 || isNaN(number)) {
      return false;
    }
    if (!/^[A-z ]+$/.test(name)) {
      // alert('hi');
      return false;
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)) {
      // alert('hi');
      return false;
    }
    return true;
  }
  const createaccount = () => {
    if (validform()) {
      const user = {
        email,
        password,
        name,
        number
      }
      const data = JSON.parse(localStorage.getItem('user'));
      if (data === null) {
        localStorage.setItem('user', JSON.stringify([user]));
      } else {
        localStorage.setItem('user', JSON.stringify([...data, user]));
      }
      setdata(JSON.parse(localStorage.getItem('user')));
      alert("You have Success full created");
    }

  }

  return (
    <div className="App">
      <div className="image">
        <img src="https://images.unsplash.com/photo-1476673160081-cf065607f449?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" />
      </div>
      <div className="login">
        
        <Router>
          <Switch>
            <Route exact path='/'>
                <Redirect to="/login"/>
            </Route>
            <Route exact path="/create">
              <Create email={email} password={password} setemail={setemail} setpassword={setpassword} name={name} number={number} setname={setname} setnumber={setnumber} createaccount={createaccount}  />
            </Route>
            <Route exact path="/login">
              <Login email={email} password={password} setemail={setemail} setpassword={setpassword} />
            </Route>
            <Route exact path="/user">
              <Userlist data={data} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
