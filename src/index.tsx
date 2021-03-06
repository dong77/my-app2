import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { configuredStore, loadFromLocalStorage } from './app/store'
import { createBrowserHistory } from 'history'
import {
  LocalizeProvider,
  setActiveLanguage,
  initialize,
} from 'react-localize-redux'
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader'
import ApplyTheme from 'features/ThemeFeature/ApplyTheme'
import './fonts.scss'
import './theme.scss'
import './styles.scss'
import './index.scss'
import translation from './translation.json'

const AppContainer = process.env.PLAIN_HMR
  ? React.Fragment
  : ReactHotAppContainer

const history = createBrowserHistory()
const store = configuredStore(history, loadFromLocalStorage())

store.dispatch(
  initialize({
    languages: ['en', 'zh'],
    translation,
    options: {
      renderToStaticMarkup: false,
      renderInnerHtml: true,
      defaultLanguage: 'zh',
    },
  })
)

const render = () => {
  const App = require('./app/App').default

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <LocalizeProvider store={store}>
          <ConnectedRouter history={history}>
            <ApplyTheme>
              <App />
            </ApplyTheme>
          </ConnectedRouter>
        </LocalizeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}
