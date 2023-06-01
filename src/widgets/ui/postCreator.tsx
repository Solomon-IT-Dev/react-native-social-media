import { Ionicons } from '@expo/vector-icons'
import { ImagePickerAsset } from 'expo-image-picker'
import { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { CreatePostForm, FormCleaner, OpenCamera, OpenMediaLibrary } from 'features'

import { CameraActionBox, PostBox } from 'entities'

import { CameraView, PostImage, PostType, RoundButton, TitleS } from 'shared'

const initialState: PostType = {
  imageUri: null,
  name: '',
  location: '',
}

export const PostCreator: FC = () => {
  const [image, setImage] = useState<ImagePickerAsset[] | null>(null)

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
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
        <View style={styles.subContainer}>
          <CreatePostForm />
          <FormCleaner
            onPress={() => {
              setImage(null)
            }}
            disabled={!image}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    justifyContent: 'space-between',
  },
  subContainer: {
    gap: 120,
  },
})
