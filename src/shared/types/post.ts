import { ImagePickerAsset } from 'expo-image-picker'

export type PostType = {
  image: ImagePickerAsset[] | null
  name: string
  location: string
}
