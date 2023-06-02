import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-gesture-handler'

import { Background, Logo } from 'shared'

import { Routing } from './routes'

const App = () => {
  const [fontsLoaded] = useFonts({
    'Raleway-Regular': require('shared/assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Medium': require('shared/assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Bold': require('shared/assets/fonts/Raleway-Bold.ttf'),
  })

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync()
    }

    prepare()
  }, [])

  if (!fontsLoaded) {
    return (
      <Background>
        <Logo />
      </Background>
    )
  } else SplashScreen.hideAsync()

  return <Routing />
}

export default App
