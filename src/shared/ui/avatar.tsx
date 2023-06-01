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
      width: size,
      height: size,
      borderRadius: size === AvatarSizeEnum.EXTRASMALL ? 50 : 16,
    }}
  >
    <Image
      alt="User avatar"
      source={src ? { uri: src } : require('shared/assets/images/avatar-placeholder.png')}
      resizeMode="cover"
      style={{
        width: size,
        height: size,
      }}
    />
  </View>
)

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#F6F6F6',
  },
})
