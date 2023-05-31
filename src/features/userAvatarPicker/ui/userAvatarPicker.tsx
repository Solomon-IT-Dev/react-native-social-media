import { FC } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import { Avatar, AvatarSizeEnum, PlusCircleIcon, useImagePicker } from 'shared'

export const UserAvatarPicker: FC = () => {
  const { pickedImage, setPickedImage, takeImageHandler, removeImage } = useImagePicker()

  return (
    <View style={styles.userAvatarContainer}>
      <Avatar src={pickedImage && pickedImage[0].uri} size={AvatarSizeEnum.NORMAL} />
      <Pressable
        style={styles.actionButton}
        onPress={pickedImage ? () => removeImage() : () => takeImageHandler([4, 4], 0.5)}
      >
        <View style={pickedImage && { transform: [{ rotate: '45deg' }] }}>
          <PlusCircleIcon color={pickedImage ? '#BDBDBD' : '#FF6C00'} />
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
