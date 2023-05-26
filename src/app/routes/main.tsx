import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { CreatePostsScreen, PostsScreen, ProfileScreen } from 'pages'

const MainTab = createBottomTabNavigator()

export const MainRoutes: FC = () => (
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
