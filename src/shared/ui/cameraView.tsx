import { Camera } from 'expo-camera'
import { FC, ReactElement } from 'react'
import { StyleSheet } from 'react-native'

export const CameraView: FC<{ children?: ReactElement }> = ({ children }) => (
  <Camera style={styles.camera}>{children}</Camera>
)

const styles = StyleSheet.create({
  camera: {
    maxWidth: 425,
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
})
