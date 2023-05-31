import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { ParagraphL, TextButton } from 'shared'

export enum EntryPageEnum {
  SignUp,
  LogIn,
}

export const EntryPageSwitch: FC<{ entryPage: EntryPageEnum; navigateTo: () => void }> = ({
  entryPage,
  navigateTo,
}) => (
  <View style={styles.container}>
    <ParagraphL
      text={entryPage === EntryPageEnum.SignUp ? 'Already have an account?' : 'Do not have an account?'}
      color="#1B4371"
    />
    <TextButton title={entryPage === EntryPageEnum.SignUp ? 'Log In' : 'Sign Up'} onPress={navigateTo} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 8,
    justifyContent: 'center',
  },
})
