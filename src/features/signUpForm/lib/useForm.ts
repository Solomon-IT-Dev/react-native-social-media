import { useState } from 'react'

import { authSignUpUser } from 'entities'

import { useAppDispatch } from 'shared'

const useForm = () => {
  const initialState = {
    login: '',
    email: '',
    password: '',
  }

  const [formState, setFormState] = useState(initialState)

  const dispatch = useAppDispatch()

  const handleChangeText = (key: string, inputValue: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: inputValue }))
  }

  const handleSubmit = () => {
    dispatch(authSignUpUser(formState))
    setFormState(initialState)
  }

  const allowSubmit = formState.login !== '' && formState.email !== '' && formState.password !== ''

  return { formState, handleChangeText, handleSubmit, allowSubmit }
}

export default useForm
