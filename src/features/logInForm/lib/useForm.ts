import { useState } from 'react'

import { authLogInUser } from 'entities'

import { useAppDispatch } from 'shared'

const useForm = () => {
  const initialState = {
    email: '',
    password: '',
  }

  const [formState, setFormState] = useState(initialState)

  const dispatch = useAppDispatch()

  const handleChangeText = (key: string, inputValue: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: inputValue }))
  }

  const handleSubmit = () => {
    dispatch(authLogInUser(formState))
    setFormState(initialState)
  }

  const allowSubmit = formState.email !== '' && formState.password !== ''

  return { formState, handleChangeText, handleSubmit, allowSubmit }
}

export default useForm
