import { FC } from 'react'

import { EntryPageSwitch, SignUpForm, UserAvatar } from 'features'

import { SignUpCard } from 'entities'

export const SignUp: FC = () => (
  <SignUpCard avatar={<UserAvatar />} form={<SignUpForm />} pageSwitch={<EntryPageSwitch />} />
)
