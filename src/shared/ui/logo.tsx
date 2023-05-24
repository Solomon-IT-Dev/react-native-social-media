import { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const Logo: FC = () => (
  <View style={styles.container}>
    <Image
      alt="App logo"
      source={require('shared/assets/images/logo.png')}
      resizeMode="contain"
      style={{ width: 320, height: 160 }}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
