import { useNavigation } from '@react-navigation/native'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { Dispatch, SetStateAction, useEffect } from 'react'
import uuid from 'react-native-uuid'
import { useSelector } from 'react-redux'

import { firebaseApp } from 'entities'

import type { NavProp, PostType, RootStackParamList } from 'shared'

const useForm = (initialState: PostType, postData: PostType, setPostData: Dispatch<SetStateAction<PostType>>) => {
  const { navigate } = useNavigation<NavProp<keyof RootStackParamList>>()
  const { userId, userName } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    const setPostCreator = () => {
      setPostData((prevState) => ({ ...prevState, user: { id: userId, login: userName } }))
    }

    setPostCreator()
  }, [userId, userName])

  useEffect(() => {
    const uploadPostImgToStorage = async () => {
      try {
        if (postData.image) {
          const postImgUri = await fetch(postData.image[0].uri)
          const postImgId = uuid.v4()
          const imgFile = await postImgUri.blob()
          const firebaseStorage = getStorage(firebaseApp)
          const postsStorageRef = ref(firebaseStorage, `posts/${postImgId}`)

          await uploadBytes(postsStorageRef, imgFile)

          const processedPostImg = await getDownloadURL(postsStorageRef)
          setPostData((prevState) => ({ ...prevState, imageDownloadURL: processedPostImg }))
        }
      } catch (error) {
        console.error(error)
      }
    }

    uploadPostImgToStorage()
  }, [postData.image])

  const handleChangeText = (key: string, inputValue: string) => {
    setPostData((prevState) => ({ ...prevState, [key]: inputValue }))
  }

  const uploadPostDataToServer = async () => {
    try {
      const firestore = getFirestore(firebaseApp)
      const postsCollection = collection(firestore, 'posts')
      await addDoc(postsCollection, postData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async () => {
    try {
      await uploadPostDataToServer()

      setPostData(initialState)
      navigate('Posts')
    } catch (error) {
      console.error(error)
    }
  }

  const allowSubmit = postData.image !== null && postData.name !== ''

  return { handleChangeText, handleSubmit, allowSubmit }
}

export default useForm
