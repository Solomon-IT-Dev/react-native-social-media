import { FC } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { LogOut, UserAvatarPicker } from 'features'

import { ProfileCard } from 'entities'

import { Paragraph } from 'shared'

export const Profile: FC = () => (
  <ScrollView>
    <View style={styles.container}>
      <ProfileCard
        avatar={<UserAvatarPicker />}
        profileAction={<LogOut />}
        userName="John Show"
        content={
          <Paragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptates! Natus magni tenetur iste error consectetur tempore ipsum cupiditate impedit molestias eligendi doloribus facere similique nihil voluptatem quibusdam, minus aliquid?" />
        }
      />
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
  },
})
