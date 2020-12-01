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
      {/* <table>
        <thead>
          <th>Application ID</th>
          <th>Name</th>
          <th>Description</th>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {applications.map(application => (
            <tr>
              <td>{application.applicationId}</td>
              <td>{application.name}</td>
              <td>{application.description}</td>
              <td><i class="far fa-eye"></i></td>
              <td><i class="fas fa-pencil-alt"></i></td>
              <td><i class="fas fa-backspace"></i></td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Button text='Add Application' type='btn' link='/' />
    </section>
  )
}

export default Applications
