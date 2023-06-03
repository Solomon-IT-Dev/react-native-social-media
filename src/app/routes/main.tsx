import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { CreatePostScreen } from 'pages'

import { GoBack } from 'features'

import { TitleM } from 'shared'

import { NestedRoutes } from './nested'

const MainTab = createBottomTabNavigator()

export const MainRoutes: FC = () => (
  <MainTab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    }}
  >
    <MainTab.Screen
      name="RootPosts"
      component={NestedRoutes}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color }) => <Feather name="grid" size={24} color={focused ? '#1B4371' : color} />,
      }}
    />
    <MainTab.Screen
      name="Create"
      component={CreatePostScreen}
      options={{
        headerTitle: () => <TitleM text="Create Post" />,
        headerLeft: () => <GoBack style={{ marginLeft: 16 }} />,
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
        tabBarStyle: { display: 'none' },
      }}
    />
    <MainTab.Screen
      name="RootProfile"
      component={NestedRoutes}
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
