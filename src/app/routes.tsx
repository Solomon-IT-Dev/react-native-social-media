import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LogInScreen, SignUpScreen } from 'pages'

const AuthStack = createNativeStackNavigator()

export const Routing = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}
