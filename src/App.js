import './App.css';
import Home from './Pages/Home/Home';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Appointment from '../src/Pages/Home/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/home">
          <Home />
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/register">
          <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
