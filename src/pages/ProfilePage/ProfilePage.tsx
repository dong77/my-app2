import React, { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import Navbar from 'features/navbar/Navbar'
import styles from './ProfilePage.module.scss'

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.ProfilePage} data-testid="ProfilePage">
      <Navbar />
      <div>Profile Page</div>
    </div>
  )
}

export default ProfilePage
