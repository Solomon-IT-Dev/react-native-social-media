import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'

import { RoundButton, useImagePicker } from 'shared'

export const OpenMediaLibrary: FC = () => {
  const { takeImageHandler } = useImagePicker()

  return (
    <RoundButton
      icon={<MaterialIcons name="library-add" size={24} color="#BDBDBD" />}
      onPress={() => takeImageHandler([9, 16], 0.8)}
    />
  )
}
