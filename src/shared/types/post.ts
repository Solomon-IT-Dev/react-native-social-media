import { ImagePickerAsset } from 'expo-image-picker'

export type PostType = {
  imageUri: ImagePickerAsset[] | null
  name: string
  location: string
}
