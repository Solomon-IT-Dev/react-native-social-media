import { NavigationContainer } from '@react-navigation/native'
import { FC } from 'react'

import { AuthRoutes } from './auth'
import { MainRoutes } from './main'

const useRoutes = (isAuth: boolean) => {
  if (!isAuth) {
    return <AuthRoutes />
  }

  return <MainRoutes />
}

export const Routing: FC = () => {
  const routing = useRoutes(false)

  return <NavigationContainer>{routing}</NavigationContainer>
}
