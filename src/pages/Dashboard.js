import React from 'react'
import {useSelector} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import SubHeader from '../components/SubHeader/SubHeader'
import Sidebar from '../components/Sidebar/Sidebar'
import Applications from './Applications'
import Account from './Account'
import Usage from './Usage'
import ApplicationDetails from './ApplicationDetails'
import AddApplication from './AddApplication'

const Dashboard = () => {
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  return (
    <>
      <SubHeader
        title='Dashboard'
        text='Manage applications, manage account and view API usage.'
      />
      <Router>
        <section className='container container--dashboard'>
          <Sidebar />
          <Switch>
            <Route exact path='/dashboard'>
              {userInfo ?  <Redirect to='/dashboard/applications'/> : <Redirect to='/login'/>}
             
            </Route>
            <Route exact path='/dashboard/applications'>
              <Applications />
            </Route>
            <Route path='/dashboard/applications/add'>
              <AddApplication />
            </Route>
            <Route path='/dashboard/applications/view/:id'>
              <ApplicationDetails />
            </Route>
            <Router path='/dashboard/account'>
              <Account />
            </Router>
            <Router path='/dashboard/usage'>
              <Usage />
            </Router>
          </Switch>
        </section>
      </Router>
    </>
  )
}

export default Dashboard
