import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { SignUp } from 'widgets'

import { Background } from 'shared'

export const SignUpScreen: FC = () => (
  <View style={styles.container}>
    <Background>
      <SignUp />
    </Background>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
