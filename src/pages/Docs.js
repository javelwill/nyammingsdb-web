import React from 'react'
import SubHeader from '../components/SubHeader/SubHeader'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'

const Docs = () => {
  return (
    <>
      <SubHeader title='Docs' text='Learn how integrate with our API.' />
      <section className='container'>
        <SwaggerUI url='http://localhost:8080/v2/api-docs' />
      </section>
    </>
  )
}

export default Docs
