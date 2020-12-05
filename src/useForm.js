import { useState, useEffect } from 'react'

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)

  useEffect(() => {
    setValues(initialState)
  }, [initialState])

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
    console.log({ values })
  }

  return { values, handleChange, handleSubmit }
}

export default useForm
