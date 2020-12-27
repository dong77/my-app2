import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { configuredStore } from './app/store'
import { createBrowserHistory } from 'history'
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'
import ApplyTheme from 'features/themeFeature/ApplyTheme'
import './index.css'

const history = createBrowserHistory()
const store = configuredStore(history)
const AppContainer = process.env.PLAIN_HMR
  ? React.Fragment
  : ReactHotAppContainer
const render = () => {
  const App = require('./app/App').default

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ApplyTheme>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </ApplyTheme>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}
