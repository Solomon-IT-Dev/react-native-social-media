import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { Title, TitleHeightEnum, TitleSizeEnum } from 'shared'

interface ILogInCard {
  form: ReactElement
  pageSwitch: ReactElement
}

export const LogInCard: FC<ILogInCard> = ({ form, pageSwitch }) => (
  <View>
    <View style={styles.cardContainer}>
      <View style={styles.titleContainer}>
        <Title text="Log In" textSize={TitleSizeEnum.L} textHeight={TitleHeightEnum.L} />
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
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  titleContainer: {
    marginBottom: 32,
  },
  pageSwitchContainer: {
    marginTop: 16,
  },
})
