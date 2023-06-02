import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  LogIn: undefined
  SignUp: undefined
  Posts: undefined
  Create: undefined
  Profile: undefined
  Comments: undefined
  Map: undefined
}

export type NavProp<Screen extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, Screen>

// export type ScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>
