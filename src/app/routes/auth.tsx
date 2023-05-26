import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import { LogInScreen, SignUpScreen } from 'pages'

const AuthStack = createNativeStackNavigator()

export const AuthRoutes: FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="LogIn"
      component={LogInScreen}
      options={{ headerShown: false, gestureDirection: 'vertical' }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ headerShown: false, gestureDirection: 'vertical' }}
    />
  </AuthStack.Navigator>
)
