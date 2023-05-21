import { FC } from 'react'
import { Circle, Path, Svg } from 'react-native-svg'

export const AddIcon: FC = () => (
  <Svg width={25} height={25}>
    <Circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00" />
    <Path fillRule="evenodd" clipRule="evenodd" d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00" />
  </Svg>
)
