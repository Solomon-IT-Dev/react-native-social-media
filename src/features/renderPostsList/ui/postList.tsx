import { FC, ReactElement } from 'react'
import { FlatList, StyleSheet } from 'react-native'

interface IPostsList {
  data: string[]
  renderItem: ReactElement
  listEmptyComponent: ReactElement
  //   headerComponent?: ReactElement
}

// export const PostsList: FC = () => <FlatList />

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 32,
//     paddingHorizontal: 16,
//     flex: 1,
//     gap: 32,
//     backgroundColor: '#FFFFFF',
//   },
// })
