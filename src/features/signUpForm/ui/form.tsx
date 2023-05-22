import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import useForm from 'features/signUpForm/lib/useForm'

import { Button, Input } from 'shared'

export const SignUpForm: FC = () => {
  const { formState, handleChangeText, handleSubmit, allowSubmit } = useForm()

  return (
    <View style={styles.form}>
      <View style={styles.container}>
        <Input placeholderText="Login" name="login" onChangeText={handleChangeText} value={formState.login} />
        <Input placeholderText="Email" name="email" onChangeText={handleChangeText} value={formState.email} />
        <Input
          placeholderText="Password"
          name="password"
          onChangeText={handleChangeText}
          value={formState.password}
          secureTextEntry
        />
      </View>
      <Button title="Sign up" onPress={handleSubmit} disabled={allowSubmit} />
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
