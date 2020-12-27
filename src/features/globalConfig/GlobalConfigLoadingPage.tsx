import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { Exchange, Token, Tokens, GlobalConfig } from 'api/loopringAPI'
import { RootState } from 'app/rootReducer'
import { fetchGlobalConfig } from './globalConfigSlice'

export const GlobalConfigLoadingPage = () => {
  const dispatch = useDispatch()

  const { version, addressToTokenMap, idToTokenMap } = useSelector(
    (state: RootState) => state.globalConfig,
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchGlobalConfig())
  }, [version, addressToTokenMap, idToTokenMap])

  return <div>Loading...</div>
}
