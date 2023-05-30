import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { User } from 'widgets'

export const PostsScreen: FC = () => (
  <View style={styles.container}>
    <User />
  </View>
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
