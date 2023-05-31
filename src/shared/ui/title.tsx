import { FC } from 'react'
import { Text } from 'react-native'

interface ITitle {
  text: string
  color?: string
}

export const TitleXS: FC<ITitle> = ({ text, color = '#212121' }) => (
  <Text
    style={{
      fontFamily: 'Raleway-Bold',
      fontWeight: '700',
      fontSize: 13,
      lineHeight: 15,
      textAlign: 'center',
      color: color,
    }}
  >
    {text}
  </Text>
)

export const TitleS: FC<ITitle> = ({ text, color = '#212121' }) => (
  <Text
    style={{
      fontFamily: 'Raleway-Medium',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 19,
      textAlign: 'center',
      color: color,
    }}
  >
    {text}
  </Text>
)

export const TitleM: FC<ITitle> = ({ text, color = '#212121' }) => (
  <Text
    style={{
      fontFamily: 'Raleway-Medium',
      fontWeight: '500',
      fontSize: 17,
      lineHeight: 22,
      textAlign: 'center',
      color: color,
    }}
  >
    {text}
  </Text>
)

export const TitleL: FC<ITitle> = ({ text, color = '#212121' }) => (
  <Text
    style={{
      fontFamily: 'Raleway-Medium',
      fontWeight: '500',
      fontSize: 30,
      lineHeight: 35,
      textAlign: 'center',
      color: color,
    }}
  >
    {text}
  </Text>
)
