import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

const ProfilePage = () => {
  const dispatch = useDispatch()
  // const globalConfig = useSelector(selectGlobalConfig, shallowEqual)

  // useEffect(() => {
  //   if (!isGlobalConfigLoaded(globalConfig)) {
  //     dispatch(fetchGlobalConfig())
  //   }
  // }, [globalConfig])

  return <div>Profile Page</div>
}

export default ProfilePage
