import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { EntryPageEnum, EntryPageSwitch, SignUpForm, UserAvatar } from 'features'

import { SignUpCard } from 'entities'

export const SignUp: FC = () => (
  <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    <SignUpCard
      avatar={<UserAvatar />}
      form={<SignUpForm />}
      pageSwitch={<EntryPageSwitch entryPage={EntryPageEnum.SignUp} />}
    />
  </KeyboardAwareScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})
