import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit'
import { applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { ThunkAction } from 'redux-thunk'
import { createBrowserHistory, History } from 'history'
import createRootReducer, { RootState } from './rootReducer'

export const configuredStore = (history: History, initialState?: RootState) => {
  const router = routerMiddleware(history)
  const middleware = [...getDefaultMiddleware(), router]
  const store = configureStore({
    reducer: createRootReducer(history),
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
