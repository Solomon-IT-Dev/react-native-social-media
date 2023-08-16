import { Ionicons } from '@expo/vector-icons'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'

import { PostType, RoundButton, useCamera, useLocation } from 'shared'

export const OpenCamera: FC<{ stateAction: Dispatch<SetStateAction<PostType>> }> = ({ stateAction }) => {
  const { shot, makeShotHandler } = useCamera()
  const { location, getLocationHandler } = useLocation()

  useEffect(() => {
    stateAction((prevState) =>
      location
        ? {
            ...prevState,
            image: shot,
            coords: { lat: location.coords.latitude, lng: location.coords.longitude },
          }
        : { ...prevState, image: shot }
    )
  }, [shot])

  const cameraHandler = () => {
    makeShotHandler([16, 9], 0.8)
    getLocationHandler()
  }

  return <RoundButton icon={<Ionicons name="md-camera" size={24} color="#BDBDBD" />} onPress={() => cameraHandler()} />
}
