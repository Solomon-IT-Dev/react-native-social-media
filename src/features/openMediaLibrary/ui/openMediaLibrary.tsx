import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'

import { RoundButton, useMediaLibrary } from 'shared'

export const OpenMediaLibrary: FC = () => {
  const { takeImageHandler } = useMediaLibrary()

  return (
    <RoundButton
      icon={<MaterialIcons name="library-add" size={24} color="#BDBDBD" />}
      onPress={() => takeImageHandler([16, 9], 0.8)}
    />
  )
}
