import { FC } from 'react'
import { Text } from 'react-native'

interface IParagraph {
  text: string
  color?: string
}

export const ParagraphXS: FC<IParagraph> = ({ text, color = '#212121' }) => (
  <Text
    style={{
      fontFamily: 'Raleway-Regular',
      fontWeight: '400',
      fontSize: 10,
      lineHeight: 12,
      letterSpacing: -0.1,
      color: color,
    }}
  >
    {text}
  </Text>
)

export const ParagraphS: FC<IParagraph> = ({ text, color = '#212121' }) => (
  <Text
    style={{
      fontFamily: 'Raleway-Regular',
      fontWeight: '400',
      fontSize: 11,
      lineHeight: 13,
      letterSpacing: -0.1,
      color: color,
    }}
  >
    {text}
  </Text>
)

export const ParagraphM: FC<IParagraph> = ({ text, color = '#212121' }) => (
  <Text
    style={{
      fontFamily: 'Raleway-Regular',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 18,
      letterSpacing: -0.1,
      color: color,
    }}
  >
    {text}
  </Text>
)

export const ParagraphL: FC<IParagraph> = ({ text, color = '#212121' }) => (
  <Text
    style={{
      fontFamily: 'Raleway-Regular',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 19,
      letterSpacing: -0.1,
      color: color,
    }}
  >
    {text}
  </Text>
)
