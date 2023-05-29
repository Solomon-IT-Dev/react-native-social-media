import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { Title } from 'shared'

export const CreatePostsScreen: FC = () => (
  <View style={styles.container}>
    <Title text="CreatePosts" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
})
