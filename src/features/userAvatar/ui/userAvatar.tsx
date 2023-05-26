import { FC } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { Avatar, AvatarSizeEnum, PlusCircleIcon } from 'shared'

export const UserAvatar: FC = () => (
  <View style={styles.userAvatarContainer}>
    <Avatar size={AvatarSizeEnum.NORMAL} />
    <TouchableOpacity activeOpacity={0.6} style={styles.actionButton}>
      <PlusCircleIcon color="#FF6C00" />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  userAvatarContainer: {
    position: 'relative',
  },
  actionButton: {
    position: 'absolute',
    right: -12,
    bottom: 14,
  },
})
