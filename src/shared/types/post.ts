import { ImagePickerAsset } from 'expo-image-picker'

export type CoordsType = {
  lat: number | undefined
  lng: number | undefined
}

export type PostType = {
  image: ImagePickerAsset[] | null
  name: string
  location: string
  coords?: CoordsType
}
