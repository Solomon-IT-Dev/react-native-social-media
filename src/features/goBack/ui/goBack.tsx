import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { IconButton } from 'shared'

interface IGoBack {
  style?: StyleProp<ViewStyle>
}

// const { navigate } = useNavigation<NavProp<'Create'>>()

// const navigateToSignUpScreen = () => {
//   navigate('LogIn')
// }

export const GoBack: FC<IGoBack> = ({ style }) => (
  <IconButton icon={<Feather name="arrow-left" size={24} color="#212121cc" />} style={style} />
)
