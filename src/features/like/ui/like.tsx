import { FontAwesome } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import { ParagraphL } from 'shared'

interface ILike {
  likePut: boolean
  likeAmount: string
  setLike: () => void
}

export const Like: FC<ILike> = ({ likePut, likeAmount, setLike }) => (
  <Pressable style={styles.container} onPress={() => setLike()}>
    <View>
      <FontAwesome
        name={likePut ? 'thumbs-up' : 'thumbs-o-up'}
        size={24}
        color={likeAmount === '0' ? '#BDBDBD' : '#FF6C00'}
      />
    </View>
    <View>
      <ParagraphL text={likeAmount} color={likeAmount === '0' ? '#BDBDBD' : '#212121'} />
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
  },
})
