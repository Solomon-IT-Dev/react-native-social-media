import { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { TextHeightEnum, TextSizeEnum } from 'shared/types/text'

interface ITextButton {
  title: string
  onPress: () => void
  textSize?: TextSizeEnum
  textHeight?: TextHeightEnum
  color?: string
  disabled?: boolean
}

export const TextButton: FC<ITextButton> = ({
  title,
  onPress,
  textSize = TextSizeEnum.M,
  textHeight = TextHeightEnum.M,
  color = '#212121',
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
