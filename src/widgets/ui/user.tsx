import { FC } from 'react'

// import { StyleSheet, View } from 'react-native'
import { UserBox } from 'entities'

// interface IUser {
//   name: string
//   email: string
//   userAvatarSrc?: string
// }

export const User: FC = () => <UserBox name="John Snow" email="email@example.com" />
