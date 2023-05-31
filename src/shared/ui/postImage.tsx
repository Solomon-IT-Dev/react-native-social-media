import { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const PostImage: FC<{ src: string }> = ({ src }) => (
  <View style={styles.imageContainer}>
    <Image alt="Post image" source={{ uri: src }} style={styles.image} />
  </View>
)

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F6F6F6',
  },
  image: {
    resizeMode: 'contain',
    maxWidth: 425,
    width: '100%',
    height: 240,
  },
})
