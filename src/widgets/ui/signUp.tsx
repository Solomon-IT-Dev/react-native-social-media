import { FC } from 'react'
import { StyleSheet } from 'react-native'

import { SignUpForm, UserAvatar } from 'features'

import { SignUpCard } from 'entities'

export const SignUp: FC = () => <SignUpCard avatar={<UserAvatar />} form={<SignUpForm />} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
