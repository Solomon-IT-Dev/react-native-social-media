import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { Button, Input } from 'shared'

export const SignUpForm: FC = () => (
  <View style={styles.form}>
    <View style={styles.container}>
      <Input placeholderText="Login" />
      <Input placeholderText="Email" />
      <Input placeholderText="Password" secureTextEntry />
    </View>
    <Button title="Sign up" />
  </View>
)

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
