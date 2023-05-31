import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { TitleL } from 'shared'

interface IProfileCard {
  avatar: ReactElement
  profileAction: ReactElement
  userName: string
  content: ReactElement
}

export const ProfileCard: FC<IProfileCard> = ({ avatar, profileAction, userName, content = null }) => (
  <View>
    <View style={styles.avatarContainer}>{avatar}</View>
    <View style={styles.cardContainer}>
      <View style={styles.actionContainer}>{profileAction}</View>
      <View style={styles.titleContainer}>
        <TitleL text={userName} />
      </View>
      <View>{content}</View>
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
    marginBottom: -330,
    paddingTop: 22,
    paddingHorizontal: 16,
    paddingBottom: 362,
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
