import React from 'react'
import styles from './DemoPage.module.scss'

const DemoPage: React.FC = () => (
  <div className={styles.DemoPage} data-testid="DemoPage">
    DemoPage Component
  </div>
)

export default DemoPage
