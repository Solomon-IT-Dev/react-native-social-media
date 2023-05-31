import { FC } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import { Avatar, AvatarSizeEnum, PlusCircleIcon, useMediaLibrary } from 'shared'

export const UserAvatarPicker: FC = () => {
  const { selectedImage, takeImageHandler, removeImage } = useMediaLibrary()

  return (
    <View style={styles.userAvatarContainer}>
      <Avatar src={selectedImage && selectedImage[0].uri} size={AvatarSizeEnum.NORMAL} />
      <Pressable
        style={styles.actionButton}
        onPress={selectedImage ? () => removeImage() : () => takeImageHandler([4, 3], 0.5)}
      >
        <View style={selectedImage && { transform: [{ rotate: '45deg' }] }}>
          <PlusCircleIcon color={selectedImage ? '#BDBDBD' : '#FF6C00'} />
        </View>
      </Pressable>
    </View>
  )
}

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
