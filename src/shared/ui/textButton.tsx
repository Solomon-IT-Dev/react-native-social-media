import { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface ITextButton {
  title: string
  onPress: () => void
  textSize?: number
  textHeight?: number
  color?: string
  disabled?: boolean
}

export const TextButton: FC<ITextButton> = ({
  title,
  onPress,
  textSize = 16,
  textHeight = 19,
  color = '#1B4371',
  disabled = false,
}) => (
  <TouchableOpacity activeOpacity={0.6} onPress={() => onPress()} disabled={disabled}>
    <Text
      style={{
        fontFamily: 'Raleway-Regular',
        fontWeight: '400',
        fontSize: textSize,
        lineHeight: textHeight,
        color: color,
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
)
