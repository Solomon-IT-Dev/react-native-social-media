import { Ionicons } from '@expo/vector-icons'
import { ImagePickerAsset } from 'expo-image-picker'
import { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { OpenCamera, OpenMediaLibrary } from 'features'

import { CameraActionBox, PostBox } from 'entities'

import { CameraView, PostImage, RoundButton, TitleS } from 'shared'

export const PostCreator: FC = () => {
  const [image, setImage] = useState<ImagePickerAsset[] | null>(null)
  console.log(image && image[0].uri)
  return (
    <View style={styles.container}>
      <PostBox
        image={
          image ? (
            <PostImage
              src={image[0].uri}
              width={image[0].width}
              height={image[0].height}
              action={
                <RoundButton
                  icon={<Ionicons name="close-circle" size={24} color="#BDBDBD" />}
                  onPress={() => setImage(null)}
                />
              }
            />
          ) : (
            <CameraView>
              <CameraActionBox
                firstAction={<OpenCamera stateAction={setImage} />}
                secondAction={<OpenMediaLibrary stateAction={setImage} />}
              />
            </CameraView>
          )
        }
        text={<TitleS text={image ? 'Edit photo' : 'Take or upload a photo'} color="#BDBDBD" />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 32,
  },
})
