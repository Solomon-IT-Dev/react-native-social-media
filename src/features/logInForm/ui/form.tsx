import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import useForm from 'features/logInForm/lib/useForm'

import { Button, Input } from 'shared'

export const LogInForm: FC = () => {
  const { formState, handleChangeText, handleSubmit, allowSubmit } = useForm()

  return (
    <View style={styles.form}>
      <View style={styles.container}>
        <Input
          placeholderText="Email"
          name="email"
          onChangeText={handleChangeText}
          value={formState.email}
          keyboardType="email-address"
        />
        <Input
          placeholderText="Password"
          name="password"
          onChangeText={handleChangeText}
          value={formState.password}
          keyboardType="visible-password"
          secureTextEntry
        />
      </View>
      <Button title="Log In" onPress={handleSubmit} disabled={!allowSubmit} />
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
