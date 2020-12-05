import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../useForm'

const INITIAL_STATE = {
  name: '',
  description: '',
}

const AddApplication = () => {
  const { values, handleChange, handleSubmit } = useForm(INITIAL_STATE)
  const history = useHistory()

  return (
    <section className='application'>
      <button onClick={() => history.goBack()} className='btn btn--secondary btn--medium'>
        Go Back
      </button>
      <div className='application__detail'>
        <div className='application__form'>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <label htmlFor='username'>NAME</label>
              <input
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control' style={{ marginBottom: '0.5rem' }}>
              <label htmlFor='password'>DESCRIPTION</label>
              <input
                type='text'
                name='description'
                value={values.description}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className='btn btn--primary btn--medium'>
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddApplication
