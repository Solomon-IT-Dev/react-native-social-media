import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import useForm from 'features/createPostForm/lib/useForm'

import { Button, Input, InputStyleEnum } from 'shared'

export const CreatePostForm: FC = () => {
  const { formState, handleChangeText, handleSubmit, allowSubmit } = useForm()

  return (
    <View style={styles.form}>
      <View style={styles.container}>
        <Input
          placeholderText="Name"
          name="name"
          onChangeText={handleChangeText}
          value={formState.name}
          keyboardType="default"
          inputStyle={InputStyleEnum.LIGHT}
        />
        <Input
          placeholderText="Location"
          name="location"
          onChangeText={handleChangeText}
          value={formState.location}
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
