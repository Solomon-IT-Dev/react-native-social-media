import { FC } from 'react'
import { Text } from 'react-native'

import { TextHeightEnum, TextSizeEnum } from 'shared/types/text'

interface IParagraph {
  text: string
  textSize?: TextSizeEnum
  textHeight?: TextHeightEnum
  color?: string
}

export const Paragraph: FC<IParagraph> = ({
  text,
  textSize = TextSizeEnum.M,
  textHeight = TextHeightEnum.M,
  color = '#212121',
}) => (
  <Text
    style={{
      fontFamily: 'Raleway-Regular',
      fontWeight: '400',
      fontSize: textSize,
      lineHeight: textHeight,
      color: color,
    }}
  >
    {text}
  </Text>
)
