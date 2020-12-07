import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, useLocation } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const location = useLocation()

  return (
    <Route {...rest}>
      {userInfo ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  )
}

export default PrivateRoute
