import { FC, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface ITextInput {
  labelText?: string
  placeholderText?: string
  secureTextEntry?: boolean
}

export const Input: FC<ITextInput> = ({ labelText, placeholderText, secureTextEntry = false }) => {
  const [isSecureText, setSecureText] = useState(secureTextEntry)

  const toggleSecureText = () => {
    setSecureText(!isSecureText)
  }

  return (
    <View>
      {labelText && <Text style={styles.inputLabel}>{labelText}</Text>}
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholderText}
          placeholderTextColor="#BDBDBD"
          secureTextEntry={isSecureText}
        />
        {secureTextEntry && (
          <TouchableOpacity activeOpacity={0.6} onPress={toggleSecureText} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>{isSecureText ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputLabel: {
    marginBottom: 8,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: '#212121',
  },
  container: {
    position: 'relative',
  },
  textInput: {
    height: 50,
    padding: 16,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    color: '#212121',
    backgroundColor: '#F6F6F6',
  },
  toggleButton: {
    position: 'absolute',
    right: 0,
    padding: 16,
  },
  toggleButtonText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
})
