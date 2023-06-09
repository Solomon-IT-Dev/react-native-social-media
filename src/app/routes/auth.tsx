import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

import { LogInScreen, SignUpScreen } from 'pages'

import { Background } from 'shared'

const AuthStack = createNativeStackNavigator()

export const AuthRoutes: FC = () => (
  <Background>
    <AuthStack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
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
  </Background>
)
