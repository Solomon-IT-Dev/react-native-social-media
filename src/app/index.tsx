import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Background } from 'shared'

const App = () => {
  return (
    <View style={styles.container}>
      <Background>
        <Text style={{ fontSize: 24 }}>Hello world!</Text>
        <StatusBar style="auto" />
      </Background>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
