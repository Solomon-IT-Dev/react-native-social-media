import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { IconButton, NavProp, RootStackParamList } from 'shared'

interface IGoBack {
  style?: StyleProp<ViewStyle>
}

export const GoBack: FC<IGoBack> = ({ style }) => {
  const { goBack } = useNavigation<NavProp<keyof RootStackParamList>>()

  return <IconButton icon={<Feather name="arrow-left" size={24} color="#212121cc" />} onPress={goBack} style={style} />
}
