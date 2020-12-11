import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listApplications } from '../actions/applicationActions'
import { useHistory } from 'react-router-dom'
import ApplicationCard from '../components/ApplicationCard/ApplicationCard'
import Loader from '../components/Loader/Loader'
import Message from '../components/Message/Message'

const Applications = () => {
  const applicationMax = 4
  const history = useHistory()
  const dispatch = useDispatch()

  const applicationList = useSelector((state) => state.applicationList)
  const applicationCreation = useSelector((state) => state.applicationCreation)
  const { loading, error, applications } = applicationList

  useEffect(() => {
    dispatch(listApplications())
  }, [applicationCreation.application])

  const addApplication = () => {
    if (applications.length === applicationMax) {
      return
    }
    history.push('/dashboard/applications/add')
  }

  return (
    <section className='applications'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="message message-danger">
          {error}
        </Message>
      ) : (
        <>
          <div className='application-list'>
            {applications?.map((application) => (
              <ApplicationCard
                key={application.applicationId}
                name={application.name}
                id={application.applicationId}
                description={application.description}
              />
            ))}
          </div>
          <button
            onClick={addApplication}
            className='btn btn--primary btn--medium'
          >
            Add Application
          </button>
        </>
      )}
    </section>
  )
}

export default Applications
