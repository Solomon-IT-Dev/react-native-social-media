import { FC } from 'react'
import MapView, { Marker } from 'react-native-maps'

import { PostType } from 'shared'

export const Map: FC<PostType> = ({ name, coords }) => (
  <MapView
    style={{
      width: '100%',
      height: '100%',
    }}
    region={{
      latitude: coords?.lat ? coords.lat : 37.78825,
      longitude: coords?.lng ? coords.lng : -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    <Marker
      coordinate={{ latitude: coords?.lat ? coords.lat : 37.78825, longitude: coords?.lng ? coords.lng : -122.4324 }}
      title={name ? name : undefined}
    />
  </MapView>
)
