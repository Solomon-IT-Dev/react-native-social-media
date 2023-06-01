import { MaterialIcons } from '@expo/vector-icons'
import { ImagePickerAsset } from 'expo-image-picker'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'

import { RoundButton, useMediaLibrary } from 'shared'

export const OpenMediaLibrary: FC<{ stateAction: Dispatch<SetStateAction<ImagePickerAsset[] | null>> }> = ({
  stateAction,
}) => {
  const { selectedImage, takeImageHandler } = useMediaLibrary()

  useEffect(() => {
    stateAction(selectedImage)
  }, [selectedImage])

  return (
    <RoundButton
      icon={<MaterialIcons name="library-add" size={24} color="#BDBDBD" />}
      onPress={() => takeImageHandler([16, 9], 0.8)}
    />
  )
}
