import { Feather } from '@expo/vector-icons'
import { Dispatch, FC, SetStateAction } from 'react'
import { StyleSheet, View } from 'react-native'

import useForm from 'features/createPostForm/lib/useForm'

import { Button, Input, InputStyleEnum, PostType } from 'shared'

export const CreatePostForm: FC<{
  initialState: PostType
  postData: PostType
  setPostData: Dispatch<SetStateAction<PostType>>
}> = ({ initialState, postData, setPostData }) => {
  const { handleChangeText, handleSubmit, allowSubmit } = useForm(initialState, postData, setPostData)

  return (
    <View style={styles.form}>
      <View style={styles.container}>
        <Input
          placeholderText="Name"
          name="name"
          onChangeText={handleChangeText}
          value={postData.name}
          keyboardType="default"
          inputStyle={InputStyleEnum.LIGHT}
        />
        <Input
          placeholderText="Location"
          name="location"
          onChangeText={handleChangeText}
          value={postData.location}
          keyboardType="default"
          inputStyle={InputStyleEnum.LIGHT}
          icon={<Feather name="map-pin" size={24} color="#BDBDBD" />}
        />
      </View>
      <Button title="Publish" onPress={handleSubmit} disabled={!allowSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    rowGap: 42,
  },
  container: {
    flexDirection: 'column',
    rowGap: 16,
  },
})
