import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authSlice } from 'entities'

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
