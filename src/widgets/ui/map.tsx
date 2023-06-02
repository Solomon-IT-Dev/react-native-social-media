import { FC } from 'react'
import MapView, { Marker } from 'react-native-maps'

export const Map: FC = () => (
  <MapView
    style={{
      width: '100%',
      height: '100%',
    }}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
  </MapView>
)
