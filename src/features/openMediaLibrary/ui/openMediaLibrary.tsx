import { MaterialIcons } from '@expo/vector-icons'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'

import { PostType, RoundButton, useMediaLibrary } from 'shared'

export const OpenMediaLibrary: FC<{ stateAction: Dispatch<SetStateAction<PostType>> }> = ({ stateAction }) => {
  const { selectedImage, takeImageHandler } = useMediaLibrary()

  useEffect(() => {
    stateAction((prevState) => ({ ...prevState, image: selectedImage }))
  }, [selectedImage])

  return (
    <RoundButton
      icon={<MaterialIcons name="library-add" size={24} color="#BDBDBD" />}
      onPress={() => takeImageHandler([16, 9], 0.8)}
    />
  )
}
