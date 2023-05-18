import { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface IButton {
  title: string
  disabled?: boolean
}

export const Button: FC<IButton> = ({ title, disabled = false }) => (
  <TouchableOpacity activeOpacity={0.8} disabled={disabled} style={styles.button}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    textAlign: 'center',
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  title: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
})
