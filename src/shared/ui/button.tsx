import { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface IButton {
  title: string
  onPress: () => void
  disabled?: boolean
}

export const Button: FC<IButton> = ({ title, onPress, disabled = false }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => onPress()}
    disabled={disabled}
    style={{ ...styles.button, backgroundColor: disabled ? '#F6F6F6' : '#FF6C00' }}
  >
    <Text style={{ ...styles.title, color: disabled ? '#BDBDBD' : '#FFFFFF' }}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    textAlign: 'center',
    borderRadius: 100,
  },
  title: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
  },
})
