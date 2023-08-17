import { DocumentData, collection, getFirestore, onSnapshot } from 'firebase/firestore'
import { Dispatch, SetStateAction } from 'react'

import { firebaseApp } from 'entities'

export const getAllPosts = (setPostData: Dispatch<SetStateAction<DocumentData>>) => {
  const firestore = getFirestore(firebaseApp)
  const postsCollection = collection(firestore, 'posts')
  onSnapshot(postsCollection, (data) => {
    setPostData(data.docs.map((doc) => ({ ...doc.data, id: doc.id })))
  })
}
