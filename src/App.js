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
import RegisterSuccess from './pages/RegisterSuccess'
import ConfirmEmail from './pages/ConfirmEmail'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/docs' component={Docs} />
          <Route path='/login' component={Login} />
          <Route path='/register/confirm-email' component={ConfirmEmail} />
          <Route path='/register/success' component={RegisterSuccess} />
          <Route path='/register' component={Register} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
