import React from 'react'
import styles from './DeFiPage.module.scss'
import Navbar from 'features/navbar/Navbar'
const DeFiPage: React.FC = () => (
  <div className={styles.DeFiPage} data-testid="DeFiPage">
    <Navbar />
    DeFiPage Component
  </div>
)

export default DeFiPage
