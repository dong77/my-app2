import React, { useEffect, ReactChildren, ReactChild } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router'

import RelayerConfigLoadingPage from 'features/RelayerConfig/RelayerConfigLoadingPage'

import { isRelayerConfigLoaded } from 'features/RelayerConfig/RelayerConfigSlice'
import { RootState, selectRelayerConfig, selectRouter } from 'app/rootReducer'

interface RelayerConfigAccessProps {
  children: ReactChild | ReactChildren
}

const RelayerConfigAccess = ({ children }: RelayerConfigAccessProps) => {
  const RelayerConfig = useSelector(selectRelayerConfig)
  const { error, version } = RelayerConfig

  if (error) {
    return <div>Error: {error}</div>
  }
  if (!isRelayerConfigLoaded(RelayerConfig)) {
    return <RelayerConfigLoadingPage />
  }
  return <div>{children}</div>
}

export default RelayerConfigAccess
