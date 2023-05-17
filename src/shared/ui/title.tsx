import { FC } from 'react'
import { StyleSheet, Text } from 'react-native'

export const Title: FC<{ text: string }> = ({ text }) => <Text style={styles.title}>{text}</Text>

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
  },
})
