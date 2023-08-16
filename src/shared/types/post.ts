import { ImagePickerAsset } from 'expo-image-picker'

import { UserType } from 'shared'

export type CoordsType = {
  lat: number | null
  lng: number | null
}

export type PostType = {
  image: ImagePickerAsset[] | null
  imageDownloadURL: string
  name: string
  location: string
  coords: CoordsType
  user: Pick<UserType, 'id' | 'login'>
}
