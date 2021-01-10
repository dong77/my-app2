import React from 'react'
import styles from './DemoPage.module.scss'
import Navbar from 'features/Navbar/Navbar'
import DemoFeature from 'features/DemoFeature/DemoFeature'

const DemoPage: React.FC = () => (
  <div className={styles.DemoPage} data-testid="DemoPage">
    <Navbar />
    DemoPage Component
    <DemoFeature />
  </div>
)

export default DemoPage
