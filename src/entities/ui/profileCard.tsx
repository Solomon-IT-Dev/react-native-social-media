import { FC, ReactElement } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { Title, TitleHeightEnum, TitleSizeEnum } from 'shared'

interface IProfileCard {
  avatar: ReactElement
  profileAction: ReactElement
  userName: string
  content: ReactElement | null
}

export const ProfileCard: FC<IProfileCard> = ({ avatar, profileAction, userName, content = null }) => (
  <View>
    <View style={styles.avatarContainer}>{avatar}</View>
    <View style={styles.cardContainer}>
      <View style={styles.actionContainer}>{profileAction}</View>
      <View style={styles.titleContainer}>
        <Title text={userName} textSize={TitleSizeEnum.L} textHeight={TitleHeightEnum.L} />
      </View>
      <ScrollView>{content}</ScrollView>
    </View>
  </View>
)

const styles = StyleSheet.create({
  avatarContainer: {
    zIndex: 3,
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: 60 }],
  },
  cardContainer: {
    //   marginTop: 200,
    // marginBottom: -360,
    paddingTop: 22,
    paddingHorizontal: 16,
    paddingBottom: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  actionContainer: {
    marginBottom: 46,
    alignItems: 'flex-end',
  },
  titleContainer: {
    marginBottom: 32,
  },
})
