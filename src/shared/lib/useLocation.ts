import { LocationObject, PermissionStatus, getCurrentPositionAsync, useForegroundPermissions } from 'expo-location'
import { useState } from 'react'
import { Alert } from 'react-native'

export const useLocation = () => {
  const [location, setLocation] = useState<LocationObject | null>(null)

  const [locationPermissionInfo, requestPermission] = useForegroundPermissions()

  const verifyPermissions = async () => {
    if (locationPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (locationPermissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permission!', 'You need to grant geolocation permission to pinpoint the location.')
      return false
    }

    return true
  }

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions()

    if (!hasPermission) {
      return
    }

    const location = await getCurrentPositionAsync({})

    setLocation(location)
  }

  const removeLocation = () => {
    setLocation(null)
  }

  return { location, setLocation, getLocationHandler, removeLocation }
}
