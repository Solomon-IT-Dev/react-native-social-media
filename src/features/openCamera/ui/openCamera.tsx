import { Ionicons } from '@expo/vector-icons'
import { ImagePickerAsset } from 'expo-image-picker'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'

import { RoundButton, useCamera } from 'shared'

export const OpenCamera: FC<{ stateAction: Dispatch<SetStateAction<ImagePickerAsset[] | null>> }> = ({
  stateAction,
}) => {
  const { shot, makeShotHandler } = useCamera()

  useEffect(() => {
    stateAction(shot)
  }, [shot])

  return (
    <RoundButton
      icon={<Ionicons name="md-camera" size={24} color="#BDBDBD" />}
      onPress={() => makeShotHandler([16, 9], 0.8)}
    />
  )
}
