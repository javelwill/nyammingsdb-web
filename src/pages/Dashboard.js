import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom'
import SubHeader from '../components/SubHeader/SubHeader'
import Sidebar from '../components/Sidebar/Sidebar'
import Applications from './Applications'
import Account from './Account'
import Usage from './Usage'
import ApplicationDetails from './ApplicationDetails'
import AddApplication from './AddApplication'

const Dashboard = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const match = useRouteMatch()
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
            <Route path={`${match.url}/applications/view/:id`}>
              <ApplicationDetails />
            </Route>
            <Route path={`${match.url}/applications/add`}>
              <AddApplication />
            </Route>
            <Route exact path={`${match.url}/applications`}>
              <Applications />
            </Route>
            <Route exact path={`${match.path}`}>
              {userInfo ? (
                <Redirect to={`${match.url}/applications`} />
              ) : (
                <Redirect to='/login' />
              )}
            </Route>

            <Router path={`${match.url}/account`}>
              <Account />
            </Router>
            <Router path={`${match.url}/usage`}>
              <Usage />
            </Router>
          </Switch>
        </section>
      </Router>
    </>
  )
}

export default Dashboard
