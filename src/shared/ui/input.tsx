import { FC } from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface ITextInput {
  placeholderText?: string
}

export const Input: FC<ITextInput> = ({ placeholderText }) => (
  <TextInput style={styles.textInput} placeholder={placeholderText} placeholderTextColor="#BDBDBD" />
)

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    marginHorizontal: 16,
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
})
