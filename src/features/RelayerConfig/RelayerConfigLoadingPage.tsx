import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Exchange, Token, Tokens, RelayerConfig } from 'api/loopringAPI'
import { RootState, selectRelayerConfig } from 'app/rootReducer'
import { fetchRelayerConfig, isRelayerConfigLoaded } from './RelayerConfigSlice'

const RelayerConfigLoadingPage = () => {
  const dispatch = useDispatch()
  const RelayerConfig = useSelector(selectRelayerConfig, shallowEqual)

  useEffect(() => {
    if (!isRelayerConfigLoaded(RelayerConfig)) {
      dispatch(fetchRelayerConfig())
    }
  }, [RelayerConfig])

  return <div>Loading...</div>
}

export default RelayerConfigLoadingPage
