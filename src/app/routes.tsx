import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View } from 'react-native'

import { CreatePostsScreen, LogInScreen, PostsScreen, ProfileScreen, SignUpScreen } from 'pages'

const AuthStack = createNativeStackNavigator()
const MainTab = createBottomTabNavigator()

const useRoutes = (isAuth: boolean) => {
  if (!isAuth) {
    return (
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
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Feather name="grid" size={24} color={focused ? '#000000a5' : color} />,
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                width: 70,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                backgroundColor: '#FF6C00',
              }}
            >
              <Feather name="plus" size={18} color="#FFFFFF" />
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => <Feather name="user" size={24} color={focused ? '#000000a5' : color} />,
        }}
      />
    </MainTab.Navigator>
  )
}

export const Routing = () => {
  const routing = useRoutes(true)

  return <NavigationContainer>{routing}</NavigationContainer>
}

const styles = StyleSheet.create({
  tabBar: {
    height: 84,
    paddingHorizontal: 56,
    shadowOffset: { width: 0, height: -0.5 },
    shadowRadius: 0,
    shadowOpacity: 0.3,
    shadowColor: '#000000',
  },
})
