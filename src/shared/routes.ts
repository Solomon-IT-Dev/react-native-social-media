import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  LogIn: undefined
  SignUp: undefined
}

export type NavProp<Screen extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, Screen>

// export type ScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>
