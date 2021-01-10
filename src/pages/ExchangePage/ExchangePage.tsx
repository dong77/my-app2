import React from 'react'
import styles from './ExchangePage.module.scss'
import Navbar from 'features/Navbar/Navbar'
const ExchangePage: React.FC = () => (
  <div className={styles.ExchangePage} data-testid="ExchangePage">
    <Navbar />
    ExchangePage Component
  </div>
)

export default ExchangePage
