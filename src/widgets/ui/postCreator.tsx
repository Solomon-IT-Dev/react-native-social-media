import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { PostBox } from 'entities'

import { CameraView, PostImage, Title, TitleHeightEnum, TitleSizeEnum } from 'shared'

export const PostCreator: FC = () => (
  <View style={styles.container}>
    <PostBox
      image={<CameraView></CameraView>}
      text={
        <Title
          text="Take or upload a photo"
          textSize={TitleSizeEnum.S}
          textHeight={TitleHeightEnum.S}
          color="#BDBDBD"
        />
      }
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 32,
  },
})
