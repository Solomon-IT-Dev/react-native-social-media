import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { Paragraph, TextButton, TextHeightEnum, TextSizeEnum } from 'shared'

export const EntryPageSwitch: FC = () => (
  <View style={styles.container}>
    <Paragraph
      text="Already have an account?"
      textSize={TextSizeEnum.LARGE}
      textHeight={TextHeightEnum.LARGE}
      color="#1B4371"
    />
    <TextButton title="Sign in" textSize={TextSizeEnum.LARGE} textHeight={TextHeightEnum.LARGE} color="#1B4371" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 8,
    justifyContent: 'center',
  },
})
