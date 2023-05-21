import { FC, ReactElement, useEffect, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'

import { Title } from 'shared'

interface ISignUpCard {
  avatar: ReactElement
  form: ReactElement
  pageSwitch: ReactElement
}

export const SignUpCard: FC<ISignUpCard> = ({ avatar, form, pageSwitch }) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true)
    })

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false)
    })

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.avatarContainer}>{avatar}</View>
        <View style={{ ...styles.cardContainer, marginBottom: isKeyboardOpen ? -188 : 0 }}>
          <View style={styles.titleContainer}>
            <Title text="Sign Up" />
          </View>
          <View>{form}</View>
          <View style={styles.pageSwitchContainer}>{pageSwitch}</View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
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
