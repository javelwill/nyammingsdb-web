import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Docs from './pages/Docs'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
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
          <PrivateRoute path='/dashboard' component={Dashboard}>
            <Dashboard />
          </PrivateRoute>
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
