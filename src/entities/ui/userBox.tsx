import { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import {
  Avatar,
  AvatarSizeEnum,
  Paragraph,
  TextHeightEnum,
  TextSizeEnum,
  Title,
  TitleHeightEnum,
  TitleSizeEnum,
} from 'shared'

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
        <Title text={name} textSize={TitleSizeEnum.XS} textHeight={TitleHeightEnum.XS} />
      </View>
      <View style={styles.emailContainer}>
        <Paragraph text={email} textSize={TextSizeEnum.S} textHeight={TextHeightEnum.S} />
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
