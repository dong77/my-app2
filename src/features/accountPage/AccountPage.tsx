import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
const AccountPage = () => {
  const dispatch = useDispatch()
  // const globalConfig = useSelector(selectGlobalConfig, shallowEqual)

  // useEffect(() => {
  //   if (!isGlobalConfigLoaded(globalConfig)) {
  //     dispatch(fetchGlobalConfig())
  //   }
  // }, [globalConfig])
  return <div>Account Page</div>
}

export default AccountPage
