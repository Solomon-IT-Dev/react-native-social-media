import { NavigationContainer } from '@react-navigation/native'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { authStateChange } from 'entities'

import { useAppDispatch } from 'shared'

import { AuthRoutes } from './auth'
import { MainRoutes } from './main'

const useRoutes = (isAuth: boolean) => {
  return isAuth ? <MainRoutes /> : <AuthRoutes />
}

export const Routing: FC = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authStateChange())
  }, [])

  const routing = useRoutes(isAuth)

  return <NavigationContainer>{routing}</NavigationContainer>
}
