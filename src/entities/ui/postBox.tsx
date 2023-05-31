import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

interface IPostBox {
  image: ReactElement
  text: ReactElement
  statistics?: ReactElement
  location?: ReactElement
}

export const PostBox: FC<IPostBox> = ({ image, text, statistics, location }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>{image}</View>
    <View style={styles.infoContainer}>
      <View style={styles.textContainer}>{text}</View>
      <View
        style={{
          ...styles.infoSubContainer,
          display: statistics || location ? 'flex' : 'none',
          justifyContent: statistics ? 'space-between' : 'flex-end',
        }}
      >
        {statistics && <View>{statistics}</View>}
        {location && <View>{location}</View>}
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: { gap: 8 },
  textContainer: { alignItems: 'flex-start' },
  infoSubContainer: {
    flexDirection: 'row',
  },
})
