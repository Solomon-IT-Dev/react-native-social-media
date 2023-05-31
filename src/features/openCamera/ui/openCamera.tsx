import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'

import { RoundButton, useImagePicker } from 'shared'

export const OpenCamera: FC = () => {
  const { takeImageHandler } = useImagePicker()

  return (
    <RoundButton
      icon={<Ionicons name="md-camera" size={24} color="#BDBDBD" />}
      onPress={() => takeImageHandler([9, 16], 0.8)}
    />
  )
}
