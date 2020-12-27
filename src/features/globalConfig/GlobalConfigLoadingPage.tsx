import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Exchange, Token, Tokens, GlobalConfig } from 'api/loopringAPI'
import { RootState, selectGlobalConfig } from 'app/rootReducer'
import { fetchGlobalConfig, isGlobalConfigLoaded } from './globalConfigSlice'

const GlobalConfigLoadingPage = () => {
  const dispatch = useDispatch()
  const globalConfig = useSelector(selectGlobalConfig, shallowEqual)

  useEffect(() => {
    if (!isGlobalConfigLoaded(globalConfig)) {
      dispatch(fetchGlobalConfig())
    }
  }, [globalConfig])

  return <div>Loading...</div>
}

export default GlobalConfigLoadingPage
