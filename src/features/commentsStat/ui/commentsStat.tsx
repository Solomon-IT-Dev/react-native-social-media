import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import { ParagraphL } from 'shared'

interface ICommentsStat {
  commentsAmount: string
  handleCommentPress: () => void
}

export const CommentsStat: FC<ICommentsStat> = ({ commentsAmount, handleCommentPress }) => (
  <Pressable style={styles.container} onPress={() => handleCommentPress()}>
    <View>
      <Feather name="message-circle" size={24} color={commentsAmount === '0' ? '#BDBDBD' : '#FF6C00'} />
    </View>
    <View>
      <ParagraphL text={commentsAmount} color={commentsAmount === '0' ? '#BDBDBD' : '#212121'} />
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
  },
})
