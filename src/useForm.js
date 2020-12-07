import { useState, useEffect } from 'react'

const useForm = (initialState, submit) => {
  const [values, setValues] = useState(initialState)
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    setValues(initialState)
  }, [initialState])

  useEffect(() => {
    console.log({ values })
    if (isSubmitting) {
      submit()
      setSubmitting(false)
    }
    // eslint-disable-next-line 
  }, [isSubmitting])

  const handleChange = (event) => {
    event.persist()
    const { name, value } = event.target
    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitting(true)
  }

  return { values, handleChange, handleSubmit }
}

export default useForm
