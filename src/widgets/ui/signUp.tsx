import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { EntryPageEnum, EntryPageSwitch, SignUpForm, UserAvatarPicker } from 'features'

import { SignUpCard } from 'entities'

import type { NavProp, RootStackParamList } from 'shared'

export const SignUp: FC = () => {
  const { navigate } = useNavigation<NavProp<keyof RootStackParamList>>()

  const navigateToSignUpScreen = () => {
    navigate('LogIn')
  }

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.container}>
      <SignUpCard
        avatar={<UserAvatarPicker />}
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
