import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { EntryPageEnum, EntryPageSwitch, LogInForm } from 'features'

import { LogInCard } from 'entities'

import type { NavProp } from 'shared'

export const LogIn: FC = () => {
  const { navigate } = useNavigation<NavProp<'LogIn'>>()

  const navigateToSignUpScreen = () => {
    navigate('SignUp')
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <LogInCard
        form={<LogInForm />}
        pageSwitch={<EntryPageSwitch entryPage={EntryPageEnum.LogIn} navigateTo={navigateToSignUpScreen} />}
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
