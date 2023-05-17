import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Background } from 'shared'

export const LogInPage: FC = () => (
  <View style={styles.container}>
    <Background>
      <Text style={{ fontSize: 24 }}>Hello world!</Text>
    </Background>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
