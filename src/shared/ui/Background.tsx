import { FC, ReactNode } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

export const Background: FC<{ children: ReactNode }> = ({ children }) => (
  <ImageBackground source={require('shared/assets/images/background.png')} style={styles.bgImage}>
    {children}
  </ImageBackground>
)

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
