import { FC } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { Profile } from 'widgets'

import { Background } from 'shared'

export const ProfileScreen: FC = () => (
  <Background>
    <ScrollView>
      <View style={styles.container}>
        <Profile />
      </View>
    </ScrollView>
  </Background>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
  },
})
