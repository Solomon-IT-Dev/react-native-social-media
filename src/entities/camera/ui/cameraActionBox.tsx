import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

interface ICameraActionBox {
  firstAction: ReactElement
  secondAction?: ReactElement
}

export const CameraActionBox: FC<ICameraActionBox> = ({ firstAction, secondAction }) => (
  <View style={{ ...styles.container, gap: secondAction ? 32 : 0 }}>
    <View>{firstAction}</View>
    <View>{secondAction}</View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
