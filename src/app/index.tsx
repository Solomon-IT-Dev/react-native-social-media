import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'

import { Routing } from './routes'
import { store } from './store'

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
    return null
  } else SplashScreen.hideAsync()

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  )
}

export default App
