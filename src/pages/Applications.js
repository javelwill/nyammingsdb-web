import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import mockApplications from '../applications'
import ApplicationCard from '../components/ApplicationCard/ApplicationCard'

const Applications = () => {
  const history = useHistory()
  const applicationMax = 4
  const [error, setError] = useState(null)
  const [applications, setApplications] = useState([])

  const addApplication = () => {
    if (applications.length === applicationMax) {
      setError('You can only create four(4) applications')
      return
    }
    history.push('/dashboard/applications/add')
  }

  useEffect(() => {
    const fetchApplications = mockApplications
    setApplications(fetchApplications)
  }, [])

  return (
    <section className='applications'>
      {error && <p onClick={() => setError(null)}>{error}</p>}
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
      <button onClick={addApplication} className='btn btn--primary btn--medium'>
        Add Application
      </button>
    </section>
  )
}

export default Applications
