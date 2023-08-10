import { useNavigation } from '@react-navigation/native'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { Dispatch, SetStateAction } from 'react'
import uuid from 'react-native-uuid'

import { firebaseApp } from 'entities'

import type { NavProp, PostType, RootStackParamList } from 'shared'

const useForm = (initialState: PostType, postData: PostType, setPostData: Dispatch<SetStateAction<PostType>>) => {
  const { navigate } = useNavigation<NavProp<keyof RootStackParamList>>()

  const handleChangeText = (key: string, inputValue: string) => {
    setPostData((prevState) => ({ ...prevState, [key]: inputValue }))
  }

  const uploadPostToServer = async () => {
    try {
      if (postData.image) {
        const postImgUri = await fetch(postData.image[0].uri)
        const file = await postImgUri.blob()

        const postImgId = uuid.v4()

        const firebaseStorage = getStorage(firebaseApp)
        const storageRef = ref(firebaseStorage, `posts/${postImgId}`)
        await uploadBytes(storageRef, file)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async () => {
    await uploadPostToServer()
    setPostData(initialState)
    navigate('Posts')
  }

  const allowSubmit = postData.image !== null && postData.name !== ''

  return { handleChangeText, handleSubmit, allowSubmit }
}

export default useForm
