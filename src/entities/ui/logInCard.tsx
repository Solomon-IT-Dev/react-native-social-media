import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { Title } from 'shared'

interface ILogInCard {
  form: ReactElement
  pageSwitch: ReactElement
}

export const LogInCard: FC<ILogInCard> = ({ form, pageSwitch }) => (
  <View>
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Title text="Log In" />
      </View>
      <View>{form}</View>
      <View style={styles.pageSwitchContainer}>{pageSwitch}</View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 144,
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
