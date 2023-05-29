import { FC, ReactElement } from 'react'
import { Pressable, StyleProp, ViewStyle } from 'react-native'

interface IIconButton {
  icon: ReactElement
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export const IconButton: FC<IIconButton> = ({ icon, onPress, style }) => (
  <Pressable onPress={() => console.log('click')} style={style}>
    {icon}
  </Pressable>
)
