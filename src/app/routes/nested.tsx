import { useRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { FC } from 'react'

import { CommentsScreen, MapScreen, PostsScreen, ProfileScreen } from 'pages'

import { GoBack, LogOut } from 'features'

import { TitleM } from 'shared'

const NestedStack = createStackNavigator()

export const NestedRoutes: FC = () => {
  const route = useRoute()

  return (
    <NestedStack.Navigator>
      {route.name === 'RootPosts' ? (
        <NestedStack.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            headerTitle: () => <TitleM text="Posts" />,
            headerRight: () => <LogOut style={{ marginRight: 16 }} />,
          }}
        />
      ) : (
        <NestedStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      )}
      <NestedStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={() => ({
          headerTitle: () => <TitleM text="Comments" />,
          headerLeft: () => <GoBack style={{ marginLeft: 16 }} />,
          tabBarVisible: false,
        })}
      />
      <NestedStack.Screen
        name="Map"
        component={MapScreen}
        options={() => ({
          headerTitle: () => <TitleM text="Comments" />,
          headerLeft: () => <GoBack style={{ marginLeft: 16 }} />,
          tabBarVisible: false,
        })}
      />
    </NestedStack.Navigator>
  )
}
