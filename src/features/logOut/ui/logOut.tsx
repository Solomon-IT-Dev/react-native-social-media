import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { authSignOutUser } from 'entities'

import { IconButton, useAppDispatch } from 'shared'

interface ILogOut {
  style?: StyleProp<ViewStyle>
}

export const LogOut: FC<ILogOut> = ({ style }) => {
  const dispatch = useAppDispatch()

  const handelLogOut = () => {
    dispatch(authSignOutUser())
  }

  return <IconButton icon={<Feather name="log-out" size={24} color="#BDBDBD" />} onPress={handelLogOut} style={style} />
}
