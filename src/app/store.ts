import { configureStore, getDefaultMiddleware, Action } from '@reduxjs/toolkit'
import { applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { ThunkAction } from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createBrowserHistory, History } from 'history'
import createRootReducer, { RootState } from './rootReducer'
import throttle from 'lodash.throttle'

const storageCacheExpiry = 15 * 60 * 1000

const getMiddlewares = (history: History) => {
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false, // disable this check because of react-localize-redux
    }),
    routerMiddleware(history),
  ]
  const excludeLoggerEnvs = ['test', 'production']
  const shouldIncludeLogger = !excludeLoggerEnvs.includes(
    process.env.NODE_ENV || ''
  )

  if (shouldIncludeLogger) {
    const logger = createLogger({
      level: 'info',
      collapsed: true,
    })
    middleware.push(logger)
  }

  return middleware
}

function saveToLocalStorage(state: RootState) {
  try {
    localStorage.setItem('state', JSON.stringify(state))
    console.log('state saved to local storage', state)
  } catch (e) {
    console.warn(e)
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
export function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('state')
    if (serialisedState === null) return undefined

    const state = JSON.parse(serialisedState)
    if (!state || state.loadAt < new Date().getTime() - storageCacheExpiry) {
      console.log('no state cached state or expired')
      return undefined
    } else {
      // Remove unwanted cached fields
      state.router = undefined
      console.log('state loaded from local storage', state)
      return state
    }
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

export const configuredStore = (history: History, initialState?: RootState) => {
  const store = configureStore({
    reducer: createRootReducer(history),
    middleware: getMiddlewares(history),
    preloadedState: initialState,
  })

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept(
      './rootReducer',
      // eslint-disable-next-line
      () => store.replaceReducer(require('./rootReducer').default)
    )
  }

  store.subscribe(
    throttle(() => {
      saveToLocalStorage(store.getState())
    }, 2500)
  )

  return store
}

export type Store = ReturnType<typeof configuredStore>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
