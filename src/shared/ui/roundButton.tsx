import { FC, ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'

interface IRoundButton {
  icon: ReactElement
  onPress: () => void
  size?: number
  color?: string
}

export const RoundButton: FC<IRoundButton> = ({ icon, onPress, size = 18, color = '#FFFFFF4D' }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={() => onPress()}
    style={{ padding: size, borderRadius: 50, backgroundColor: color }}
  >
    {icon}
  </TouchableOpacity>
)
