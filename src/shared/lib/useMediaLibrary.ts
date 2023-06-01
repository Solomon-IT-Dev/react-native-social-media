import {
  ImagePickerAsset,
  PermissionStatus,
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
} from 'expo-image-picker'
import { useState } from 'react'
import { Alert } from 'react-native'

export const useMediaLibrary = () => {
  const [selectedImage, setSelectedImage] = useState<ImagePickerAsset[] | null>(null)

  const [mediaLibraryPermissionInfo, requestPermission] = useMediaLibraryPermissions()

  const verifyPermissions = async () => {
    if (mediaLibraryPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (mediaLibraryPermissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permission!', 'You need to grant media library permission to use this app.')
      return false
    }

    return true
  }

  const takeImageHandler = async (aspect?: [number, number], quality?: number) => {
    const hasPermission = await verifyPermissions()

    if (!hasPermission) {
      return
    }

    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect,
      quality,
    })

    if (image.canceled) {
      return Alert.alert('Cancellation', 'You did not select any image.')
    }

    setSelectedImage(image.assets)
  }

  const removeImage = () => {
    setSelectedImage(null)
  }

  return { selectedImage, setSelectedImage, takeImageHandler, removeImage }
}
