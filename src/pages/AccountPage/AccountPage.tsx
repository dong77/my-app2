import React from 'react'
import styles from './AccountPage.module.scss'
import Navbar from 'features/navbar/Navbar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const AccountPage: React.FC = () => {
  const dispatch = useDispatch()
  // const globalConfig = useSelector(selectGlobalConfig, shallowEqual)

  // useEffect(() => {
  //   if (!isGlobalConfigLoaded(globalConfig)) {
  //     dispatch(fetchGlobalConfig())
  //   }
  // }, [globalConfig])
  return (
    <div className={styles.AccountPage} data-testid="AccountPage">
      <Navbar />
      <div>Account Page</div>
    </div>
  )
}

export default AccountPage
