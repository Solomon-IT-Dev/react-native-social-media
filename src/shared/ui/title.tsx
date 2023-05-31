import { FC } from 'react'
import { Text } from 'react-native'

import { TitleHeightEnum, TitleSizeEnum } from 'shared/types/text'

interface ITitle {
  text: string
  textSize?: TitleSizeEnum
  textHeight?: TitleHeightEnum
  color?: string
}

export const Title: FC<ITitle> = ({
  text,
  textSize = TitleSizeEnum.M,
  textHeight = TitleHeightEnum.M,
  color = '#212121',
}) => (
  <Text
    style={{
      fontFamily: textSize === TitleSizeEnum.XS ? 'Raleway-Bold' : 'Raleway-Medium',
      fontWeight: textSize === TitleSizeEnum.XS ? '700' : '500',
      fontSize: textSize,
      lineHeight: textHeight,
      textAlign: 'center',
      color: color,
    }}
  >
    {text}
  </Text>
)
