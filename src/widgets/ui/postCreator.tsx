import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { PostBox } from 'entities'

import { CameraView, PostImage, TitleS } from 'shared'

export const PostCreator: FC = () => (
  <View style={styles.container}>
    <PostBox image={<CameraView></CameraView>} text={<TitleS text="Take or upload a photo" color="#BDBDBD" />} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 32,
  },
})
