import { FC } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { PostCreator } from 'widgets'

export const CreatePostScreen: FC = () => (
  <ScrollView style={styles.container}>
    <PostCreator />
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 34,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})
