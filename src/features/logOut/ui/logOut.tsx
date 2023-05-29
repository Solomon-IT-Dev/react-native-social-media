import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { IconButton } from 'shared'

interface ILogOut {
  style?: StyleProp<ViewStyle>
}

// const { navigate } = useNavigation<NavProp<'Posts'>>()

// const navigateToSignUpScreen = () => {
//   navigate('LogIn')
// }

export const LogOut: FC<ILogOut> = ({ style }) => (
  <IconButton icon={<Feather name="log-out" size={24} color="#BDBDBD" />} style={style} />
)
