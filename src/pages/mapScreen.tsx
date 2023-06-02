import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { Map } from 'widgets'

export const MapScreen: FC = () => (
  <View style={styles.container}>
    <Map />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})
