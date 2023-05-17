import { FC, ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { Title } from 'shared'

export const SignUpCard: FC<{ avatar: ReactElement; form: ReactElement }> = ({ avatar, form }) => (
  <View style={styles.container}>
    <View style={styles.avatarContainer}>{avatar}</View>
    <View style={styles.titleContainer}>
      <Title text="Sign Up" />
    </View>
    <View style={styles.formContainer}>{form}</View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 264,
    flex: 1,
    justifyContent: 'flex-start',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: -60 }],
  },
  titleContainer: {
    marginHorizontal: 16,
    marginTop: 92,
    marginBottom: 32,
  },
  formContainer: {
    marginHorizontal: 16,
  },
})
