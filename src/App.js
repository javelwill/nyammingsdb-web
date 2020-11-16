import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Docs from './pages/Docs'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Router path='/docs'>
            <Docs />
          </Router>
          <Router path='/login'>
            <Login />
          </Router>
          <Router path='/register'>
            <Register />
          </Router>
        </Switch>
      </Router>
    </div>
  )
}

export default App
