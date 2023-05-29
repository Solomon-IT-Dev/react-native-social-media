import { FC } from 'react'
import { Text } from 'react-native'

import { TitleHeightEnum, TitleSizeEnum } from 'shared/types/text'

interface ITitle {
  text: string
  textSize?: TitleSizeEnum
  textHeight?: TitleHeightEnum
}

export const Title: FC<ITitle> = ({ text, textSize = TitleSizeEnum.M, textHeight = TitleHeightEnum.M }) => (
  <Text
    style={{
      fontFamily: textSize === TitleSizeEnum.XS ? 'Raleway-Bold' : 'Raleway-Medium',
      fontWeight: textSize === TitleSizeEnum.XS ? '700' : '500',
      fontSize: textSize,
      lineHeight: textHeight,
      textAlign: 'center',
    }}
  >
    {text}
  </Text>
)
