import { ImagePickerAsset, PermissionStatus, launchCameraAsync, useCameraPermissions } from 'expo-image-picker'
import { useState } from 'react'
import { Alert } from 'react-native'

export const useImagePicker = () => {
  const [pickedImage, setPickedImage] = useState<ImagePickerAsset[] | null>()

  const [cameraPermissionInfo, requestPermission] = useCameraPermissions()

  const verifyPermissions = async () => {
    if (cameraPermissionInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (cameraPermissionInfo?.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permission!', 'You need to grant camera permission to use this app.')
      return false
    }

    return true
  }

  const takeImageHandler = async (aspect?: [number, number], quality?: number) => {
    const hasPermission = await verifyPermissions()

    if (!hasPermission) {
      return
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect,
      quality,
    })

    setPickedImage(image.assets)
  }

  const removeImage = () => {
    setPickedImage(null)
  }

  return { pickedImage, setPickedImage, takeImageHandler, removeImage }
}
