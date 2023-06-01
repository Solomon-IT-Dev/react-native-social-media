import { Ionicons } from '@expo/vector-icons'
import { FC, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { CreatePostForm, FormCleaner, OpenCamera, OpenMediaLibrary } from 'features'

import { CameraActionBox, PostBox } from 'entities'

import { CameraView, PostImage, PostType, RoundButton, TitleS } from 'shared'

const initialState: PostType = {
  image: null,
  name: '',
  location: '',
}

export const PostCreator: FC = () => {
  const [postData, setPostData] = useState(initialState)

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <PostBox
          image={
            postData.image ? (
              <PostImage
                src={postData.image[0].uri}
                width={postData.image[0].width}
                height={postData.image[0].height}
                action={
                  <RoundButton
                    icon={<Ionicons name="close-circle" size={24} color="#BDBDBD" />}
                    onPress={() => setPostData((prevState) => ({ ...prevState, image: null }))}
                  />
                }
              />
            ) : (
              <CameraView>
                <CameraActionBox
                  firstAction={<OpenCamera stateAction={setPostData} />}
                  secondAction={<OpenMediaLibrary stateAction={setPostData} />}
                />
              </CameraView>
            )
          }
          text={<TitleS text={postData.image ? 'Edit photo' : 'Take or upload a photo'} color="#BDBDBD" />}
        />
        <View style={styles.subContainer}>
          <CreatePostForm initialState={initialState} postData={postData} setPostData={setPostData} />
          <FormCleaner
            onPress={() => {
              setPostData(initialState)
            }}
            disabled={!postData.image}
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
