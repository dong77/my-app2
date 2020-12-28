import React from 'react'
import styles from './HelpPage.module.scss'
import Navbar from 'features/navbar/Navbar'
const HelpPage: React.FC = () => (
  <div className={styles.HelpPage} data-testid="HelpPage">
    <Navbar />
    HelpPage Component
  </div>
)

export default HelpPage
