import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { TitleL } from 'shared'

// import { } from 'widgets'

export const CommentsScreen: FC = () => (
  <View style={styles.container}>
    <TitleL text="Comments" />
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
