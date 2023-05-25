import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { View } from 'react-native'

import { LogInPage, SignUpScreen } from 'pages'

import { Logo } from 'shared'

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
    return <Logo />
  } else SplashScreen.hideAsync()

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SignUpScreen />
      {/* <LogInPage /> */}
    </View>
  )
}

export default App
