import { FC } from 'react'
import { useSelector } from 'react-redux'

import { UserBox } from 'entities'

export const User: FC = () => {
  const user = useSelector((state: RootState) => state.auth)

  return <UserBox name={user.userName} email={user.userEmail} />
}
