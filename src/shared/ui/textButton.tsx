import { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { TextHeightEnum, TextSizeEnum } from 'shared/types/text'

interface ITextButton {
  title: string
  textSize?: TextSizeEnum
  textHeight?: TextHeightEnum
  color?: string
  disabled?: boolean
}

export const TextButton: FC<ITextButton> = ({
  title,
  textSize = TextSizeEnum.MEDIUM,
  textHeight = TextHeightEnum.MEDIUM,
  color = '#212121',
  disabled = false,
}) => (
  <TouchableOpacity activeOpacity={0.6} disabled={disabled}>
    <Text
      style={{
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
