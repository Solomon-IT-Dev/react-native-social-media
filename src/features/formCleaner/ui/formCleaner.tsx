import { Feather } from '@expo/vector-icons'
import { FC } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

interface IFormCleaner {
  onPress: () => void
  disabled: boolean
}

export const FormCleaner: FC<IFormCleaner> = ({ onPress, disabled }) => (
  <View style={styles.clearContainer}>
    <TouchableOpacity
      onPress={() => onPress()}
      activeOpacity={0.8}
      style={{
        width: 70,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: disabled ? '#F6F6F6' : '#FF6C00',
      }}
      disabled={disabled}
    >
      <Feather name="trash-2" size={18} color={disabled ? '#BDBDBD' : '#FFFFFF'} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  clearContainer: {
    paddingTop: 9,
    paddingBottom: 34,
    alignItems: 'center',
  },
})
