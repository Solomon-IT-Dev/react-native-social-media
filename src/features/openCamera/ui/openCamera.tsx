import { Ionicons } from '@expo/vector-icons'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'

import { PostType, RoundButton, useCamera } from 'shared'

export const OpenCamera: FC<{ stateAction: Dispatch<SetStateAction<PostType>> }> = ({ stateAction }) => {
  const { shot, makeShotHandler } = useCamera()

  useEffect(() => {
    stateAction((prevState) => ({ ...prevState, image: shot }))
  }, [shot])

  return (
    <RoundButton
      icon={<Ionicons name="md-camera" size={24} color="#BDBDBD" />}
      onPress={() => makeShotHandler([16, 9], 0.8)}
    />
  )
}
