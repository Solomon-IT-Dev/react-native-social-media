import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { CreatePostsScreen, PostsScreen, ProfileScreen } from 'pages'

import { BackButton, LogOutButton, Title } from 'shared'

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
        headerTitle: () => <Title text="Posts" />,
        headerRight: () => <LogOutButton />,
        tabBarIcon: ({ focused, color }) => <Feather name="grid" size={24} color={focused ? '#1B4371' : color} />,
      }}
    />
    <MainTab.Screen
      name="Create"
      component={CreatePostsScreen}
      options={{
        headerTitle: () => <Title text="Create Post" />,
        headerLeft: () => <BackButton />,
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
        headerShown: false,
        tabBarIcon: ({ focused, color }) => <Feather name="user" size={24} color={focused ? '#1B4371' : color} />,
      }}
    />
  </MainTab.Navigator>
)

const styles = StyleSheet.create({
  tabBar: {
    height: 84,
    paddingHorizontal: 56,
  },
})
