import React from 'react'
import { Route, Switch } from 'react-router'

import RelayerConfigAccess from 'features/RelayerConfig/RelayerConfigAccess'

import HomePage from 'pages/HomePage/HomePage'
import AccountPage from 'pages/AccountPage/AccountPage'
import ExchangePage from 'pages/ExchangePage/ExchangePage'
import DeFiPage from 'pages/DeFiPage/DeFiPage'
import ProfilePage from 'pages/ProfilePage/ProfilePage'
import DocsPage from 'pages/DocsPage/DocsPage'
import HelpPage from 'pages/HelpPage/HelpPage'
import DemoPage from 'pages/DemoPage/DemoPage'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/profile">
      <RelayerConfigAccess>
        <ProfilePage />
      </RelayerConfigAccess>
    </Route>
    <Route exact path="/demo">
      <DemoPage />
    </Route>
    <Route exact path="/account">
      <RelayerConfigAccess>
        <AccountPage />
      </RelayerConfigAccess>
    </Route>
    <Route exact path="/exchange">
      <RelayerConfigAccess>
        <ExchangePage />
      </RelayerConfigAccess>
    </Route>
    <Route exact path="/defi">
      <RelayerConfigAccess>
        <DeFiPage />
      </RelayerConfigAccess>
    </Route>
    <Route exact path="/docs">
      <DocsPage />
    </Route>
    <Route exact path="/help">
      <HelpPage />
    </Route>
    <Route exact path="/demo">
      <DemoPage />
    </Route>
  </Switch>
)

export default Routes
