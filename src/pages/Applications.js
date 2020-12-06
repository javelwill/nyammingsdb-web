import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ApplicationCard from '../components/ApplicationCard/ApplicationCard'

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjMGQzeWF3ZEBnbWFpbC5jb20iLCJleHAiOjE2MDgwNzUxMDl9.HYZMCHo0wme3ioeZjvyDzUmk2PkbUZEa_QlgX8tP-Mdo1uD_-V-5SFtu60K0BA82PiEephgDTHTTVjeBA1FlPg'


const Applications = () => {
  const [error, setError] = useState(null)
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const fetchApplications = async () => {
      const { data } = await axios.get('/applications', {
        headers: { Authorization: AUTH_TOKEN },
        data: {}
      })

      setApplications(data)
    }

    fetchApplications()
  }, [])

  const history = useHistory()

  const applicationMax = 4

  const addApplication = () => {
    if (applications.length === applicationMax) {
      setError('You can only create four(4) applications')
      return
    }
    history.push('/dashboard/applications/add')
  }

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
