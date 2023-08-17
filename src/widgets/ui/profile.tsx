import { FC } from 'react'
import { useSelector } from 'react-redux'

import { LogOut, UserAvatarPicker } from 'features'

import { ProfileCard } from 'entities'

import { ParagraphM } from 'shared'

export const Profile: FC = () => {
  const user = useSelector((state: RootState) => state.auth)

  return (
    <ProfileCard
      avatar={<UserAvatarPicker />}
      profileAction={<LogOut />}
      userName={user.userName}
      content={
        <ParagraphM text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid?" />
      }
    />
  )
}
