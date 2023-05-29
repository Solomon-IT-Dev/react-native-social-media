import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { Title } from 'shared'

export const PostsScreen: FC = () => (
  <View style={styles.container}>
    <Title text="Posts" />
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
