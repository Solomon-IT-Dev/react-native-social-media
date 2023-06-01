import { FC, ReactElement } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'

interface IPostImage {
  src: string
  width: number
  height: number
  action?: ReactElement
}

export const PostImage: FC<IPostImage> = ({ src, width, height, action }) => {
  const windowWidth = Dimensions.get('window').width
  const imageWidth = windowWidth * 0.8

  return (
    <View style={styles.imageContainer}>
      <Image
        alt="Post image"
        source={{ uri: src }}
        resizeMode="contain"
        style={{ width: imageWidth, height: imageWidth * (width / height) }}
      />
      {action && <View style={{ position: 'absolute' }}>{action}</View>}
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
})
