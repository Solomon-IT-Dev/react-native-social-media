import { FC } from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import { User } from 'widgets'

export const PostsScreen: FC = () => (
  <ScrollView style={styles.container}>
    <User />
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    flex: 1,
    gap: 32,
    backgroundColor: '#FFFFFF',
  },
})
