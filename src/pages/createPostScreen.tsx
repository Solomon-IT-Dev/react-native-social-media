import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { PostCreator } from 'widgets'

export const CreatePostScreen: FC = () => (
  <View style={styles.container}>
    <PostCreator />
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})
