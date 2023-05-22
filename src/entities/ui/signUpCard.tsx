import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { Title } from 'shared'

interface ISignUpCard {
  avatar: ReactElement
  form: ReactElement
  pageSwitch: ReactElement
}

export const SignUpCard: FC<ISignUpCard> = ({ avatar, form, pageSwitch }) => (
  <View>
    <View style={styles.avatarContainer}>{avatar}</View>
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Title text="Sign Up" />
      </View>
      <View>{form}</View>
      <View style={styles.pageSwitchContainer}>{pageSwitch}</View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    zIndex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: 60 }],
  },
  titleContainer: {
    marginBottom: 32,
  },
  pageSwitchContainer: {
    marginTop: 16,
  },
})
