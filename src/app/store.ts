import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { ThunkAction } from 'redux-thunk'

import rootReducer, { RootState, history } from './rootReducer'

const router = routerMiddleware(history)
const middleware = [...getDefaultMiddleware(), router]

export const configuredStore = (initialState?: RootState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: initialState,
  })

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default
      store.replaceReducer(newRootReducer)
    })
  }

  return store
}

export type Store = ReturnType<typeof configuredStore>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
