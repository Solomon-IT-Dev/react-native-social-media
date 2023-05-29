import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable } from 'react-native'

interface IBackButton {
  //   onPress: () => void
  color?: string
}

export const BackButton: FC<IBackButton> = ({ color }) => (
  <Pressable
    style={{
      marginLeft: 16,
    }}
  >
    <Feather name="arrow-left" size={24} color={color ? color : '#212121cc'} />
  </Pressable>
)
