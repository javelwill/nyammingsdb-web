import React from 'react'
import applications from '../applications'
import ApplicationCard from '../components/ApplicationCard/ApplicationCard'
import Button from '../components/Button/Button'

const Applications = () => {
  return (
    <section className='applications'>
      <div className='application-list'>
        {applications.map((application) => (
          <ApplicationCard
            name={application.name}
            id={application.applicationId}
            description={application.description}
          />
        ))}
      </div>
      <Button text='Add Application' type='btn btn--primary btn--medium' link='/' />
    </section>
  )
}

export default Applications
