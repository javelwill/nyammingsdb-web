import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SubHeader from '../components/SubHeader/SubHeader'
import Sidebar from '../components/Sidebar/Sidebar'
import Applications from './Applications'
import Account from './Account'
import Usage from './Usage'
import ApplicationDetails from './ApplicationDetails'

const Dashboard = () => {
  return (
    <>
      <SubHeader
        title='Dashboard'
        text='Manage applications, manage account and view API usage.'
      />
      <Router>
        <section className="container container--dashboard">
          <Sidebar />
          <Switch>
            <Route path='/dashboard'>
              <Applications />
            </Route>
            <Route path='/applications/:id'>
              <ApplicationDetails />
            </Route>
            <Router path='/account'>
              <Account />
            </Router>
            <Router path='/usage'>
              <Usage />
            </Router>
          </Switch>
        </section>
      </Router>
    </>
  )
}

export default Dashboard
