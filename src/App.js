import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Docs from './pages/Docs'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import RegisterSuccess from './pages/RegisterSuccess';
import ConfirmEmail from './pages/ConfirmEmail';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Router path='/docs'>
            <Docs />
          </Router>
          <Router path='/login'>
            <Login />
          </Router>
          <Router path='/register/confirm-email'>
            <ConfirmEmail />
          </Router>
          <Router path='/register/success'>
            <RegisterSuccess />
          </Router>
          <Router exact path='/register'>
            <Register />
          </Router>
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Route exact path='/' >
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
