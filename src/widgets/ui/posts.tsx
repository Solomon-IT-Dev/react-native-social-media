import { DocumentData } from 'firebase/firestore'
import { FC, useState } from 'react'
import { View } from 'react-native'

import { PostType } from 'shared'

export const Posts: FC = () => {
  const [posts, setPosts] = useState<DocumentData>()
  return <View></View>
}
