import { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { AvatarSizeEnum } from 'shared'

interface IAvatar {
  src?: string | null | undefined
  size?: AvatarSizeEnum
}

export const Avatar: FC<IAvatar> = ({ src, size = AvatarSizeEnum.NORMAL }) => (
  <View
    style={{
      ...styles.avatarContainer,
      width: size === AvatarSizeEnum.NORMAL ? 120 : 60,
      height: size === AvatarSizeEnum.NORMAL ? 120 : 60,
    }}
  >
    <Image
      alt="User avatar"
      source={src ? { uri: src } : require('shared/assets/images/avatar-placeholder.png')}
      style={{
        resizeMode: 'cover',
        width: size === AvatarSizeEnum.NORMAL ? 120 : 60,
        height: size === AvatarSizeEnum.NORMAL ? 120 : 60,
      }}
    />
  </View>
)

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#F6F6F6',
  },
})
