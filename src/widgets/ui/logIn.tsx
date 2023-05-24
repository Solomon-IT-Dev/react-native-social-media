import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { EntryPageEnum, EntryPageSwitch, LogInForm } from 'features'

import { LogInCard } from 'entities'

export const LogIn: FC = () => (
  <KeyboardAwareScrollView contentContainerStyle={styles.container}>
    <LogInCard form={<LogInForm />} pageSwitch={<EntryPageSwitch entryPage={EntryPageEnum.LogIn} />} />
  </KeyboardAwareScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
})
