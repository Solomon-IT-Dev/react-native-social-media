import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'

import { RoundButton, useCamera } from 'shared'

export const OpenCamera: FC = () => {
  const { makeShotHandler } = useCamera()

  return (
    <RoundButton
      icon={<Ionicons name="md-camera" size={24} color="#BDBDBD" />}
      onPress={() => makeShotHandler([16, 9], 0.8)}
    />
  )
}
