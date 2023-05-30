import { FC, useState } from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface ITextInput {
  name: string
  onChangeText: (key: string, inputValue: string) => void
  value: string
  labelText?: string
  placeholderText?: string
  keyboardType?: KeyboardTypeOptions
  secureTextEntry?: boolean
}

export const Input: FC<ITextInput> = ({
  name,
  onChangeText,
  value,
  labelText,
  placeholderText,
  keyboardType,
  secureTextEntry = false,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isSecureText, setSecureText] = useState(secureTextEntry)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const toggleSecureText = () => {
    setSecureText(!isSecureText)
  }

  return (
    <View>
      {labelText && <Text style={styles.inputLabel}>{labelText}</Text>}
      <View style={styles.container}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          keyboardType={keyboardType}
          placeholder={placeholderText}
          placeholderTextColor="#BDBDBD"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={(inputValue) => onChangeText(name, inputValue)}
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
    fontFamily: 'Raleway-Regular',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
    color: '#212121',
  },
  container: {
    position: 'relative',
  },
  input: {
    height: 52,
    padding: 16,
    fontFamily: 'Raleway-Regular',
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
  inputFocused: {
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF',
  },
  toggleButton: {
    position: 'absolute',
    right: 0,
    padding: 16.5,
  },
  toggleButtonText: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
})
