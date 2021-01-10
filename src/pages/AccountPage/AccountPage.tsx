import React from 'react'
import styles from './AccountPage.module.scss'
import Navbar from 'features/Navbar/Navbar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import RelayerConfigAccess from 'features/RelayerConfig/RelayerConfigAccess'

const AccountPage: React.FC = () => {
  const dispatch = useDispatch()
  // const RelayerConfig = useSelector(selectRelayerConfig, shallowEqual)

  // useEffect(() => {
  //   if (!isRelayerConfigLoaded(RelayerConfig)) {
  //     dispatch(fetchRelayerConfig())
  //   }
  // }, [RelayerConfig])

  return (
    <RelayerConfigAccess>
      <div className={styles.AccountPage} data-testid="AccountPage">
        <Navbar />
        <div>Account Page</div>
      </div>
    </RelayerConfigAccess>
  )
}

export default AccountPage
