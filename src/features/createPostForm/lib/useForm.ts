import { Dispatch, SetStateAction } from 'react'

import { PostType } from 'shared'

const useForm = (initialState: PostType, postData: PostType, setPostData: Dispatch<SetStateAction<PostType>>) => {
  const handleChangeText = (key: string, inputValue: string) => {
    setPostData((prevState) => ({ ...prevState, [key]: inputValue }))
  }

  const handleSubmit = () => {
    console.log(postData)
    setPostData(initialState)
  }

  const allowSubmit = postData.image !== null && postData.name !== ''

  return { handleChangeText, handleSubmit, allowSubmit }
}

export default useForm
