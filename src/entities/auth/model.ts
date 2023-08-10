import { Dispatch, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'

import { firebaseApp } from 'entities'

import { UserType } from 'shared'

const initialState = { userId: null, userName: null, userEmail: null, isAuth: false }

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      userName: payload.userName,
      userEmail: payload.userEmail,
    }),
    changeUserAuthState: (state, { payload }) => ({ ...state, isAuth: payload.isAuth }),
    signOutUser: () => initialState,
  },
})

export const authSignUpUser =
  ({ login, email, password }: UserType) =>
  async (dispatch: Dispatch) => {
    try {
      const auth = getAuth(firebaseApp)
      await createUserWithEmailAndPassword(auth, email, password)

      const user = auth.currentUser
      user && (await updateProfile(user, { displayName: login }))

      const updatedUser = auth.currentUser
      updatedUser &&
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: updatedUser.uid,
            userName: updatedUser.displayName,
            userEmail: updatedUser.email,
          })
        )
    } catch (error) {
      console.error(error)
    }
  }

export const authLogInUser =
  ({ email, password }: UserType) =>
  async (dispatch: Dispatch) => {
    try {
      const auth = getAuth(firebaseApp)
      await signInWithEmailAndPassword(auth, email, password)

      const user = auth.currentUser
      user &&
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
          })
        )
    } catch (error) {
      console.error(error)
    }
  }

export const authSignOutUser = () => async (dispatch: Dispatch) => {
  try {
    const auth = getAuth(firebaseApp)
    await auth.signOut()

    dispatch(authSlice.actions.signOutUser())
  } catch (error) {
    console.error(error)
  }
}

export const authStateChange = () => async (dispatch: Dispatch) => {
  try {
    const auth = getAuth(firebaseApp)
    await auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(authSlice.actions.changeUserAuthState({ isAuth: true }))
        dispatch(
          authSlice.actions.updateUserProfile({
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
          })
        )
      }
    })
  } catch (error) {
    console.log(error)
  }
}
