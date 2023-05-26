import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { EntryPageEnum, EntryPageSwitch, SignUpForm, UserAvatar } from 'features'

import { SignUpCard } from 'entities'

import type { NavProp } from 'shared'

export const SignUp: FC = () => {
  const { navigate } = useNavigation<NavProp<'SignUp'>>()

  const navigateToSignUpScreen = () => {
    navigate('LogIn')
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <SignUpCard
        avatar={<UserAvatar />}
        form={<SignUpForm />}
        pageSwitch={<EntryPageSwitch entryPage={EntryPageEnum.SignUp} navigateTo={navigateToSignUpScreen} />}
      />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})
