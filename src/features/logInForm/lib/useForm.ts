import { useState } from 'react'

const useForm = () => {
  const initialState = {
    email: '',
    password: '',
  }

  const [formState, setFormState] = useState(initialState)

  const handleChangeText = (key: string, inputValue: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: inputValue }))
  }

  const handleSubmit = () => {
    console.log(formState)
    setFormState(initialState)
  }

  const allowSubmit = formState.email !== '' && formState.password !== ''

  return { formState, handleChangeText, handleSubmit, allowSubmit }
}

export default useForm
