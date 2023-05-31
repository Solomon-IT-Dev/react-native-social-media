import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { TitleL } from 'shared'

interface ILogInCard {
  form: ReactElement
  pageSwitch: ReactElement
}

export const LogInCard: FC<ILogInCard> = ({ form, pageSwitch }) => (
  <View style={styles.cardContainer}>
    <View style={styles.titleContainer}>
      <TitleL text="Log In" />
    </View>
    <View>{form}</View>
    <View style={styles.pageSwitchContainer}>{pageSwitch}</View>
  </View>
)

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: -330,
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 474,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  titleContainer: {
    marginBottom: 32,
  },
  pageSwitchContainer: {
    marginTop: 16,
  },
})
