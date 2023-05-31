import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { Avatar, AvatarSizeEnum, ParagraphS, TitleXS } from 'shared'

interface IUserBox {
  name: string
  email: string
  userAvatarSrc?: string
}

export const UserBox: FC<IUserBox> = ({ name, email, userAvatarSrc }) => (
  <View style={styles.box}>
    <View>
      <Avatar src={userAvatarSrc} size={AvatarSizeEnum.SMALL} />
    </View>
    <View>
      <View style={styles.nameContainer}>
        <TitleXS text={name} />
      </View>
      <View style={styles.emailContainer}>
        <ParagraphS text={email} color="#212121CC" />
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  nameContainer: { alignItems: 'flex-start' },
  emailContainer: { alignItems: 'flex-start' },
})
