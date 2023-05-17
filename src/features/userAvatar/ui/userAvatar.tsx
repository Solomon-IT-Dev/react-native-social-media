import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

export const UserAvatar: FC = () => <View style={styles.avatarContainer}>AVATAR</View>

const styles = StyleSheet.create({
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#F6F6F6',
  },
})
