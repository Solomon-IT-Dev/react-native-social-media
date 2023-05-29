import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable } from 'react-native'

interface ILogOutButton {
  //   onPress: () => void
  color?: string
}

export const LogOutButton: FC<ILogOutButton> = ({ color }) => (
  <Pressable style={{ padding: 10 }}>
    <Feather name="log-out" size={24} color={color ? color : '#BDBDBD'} />
  </Pressable>
)
