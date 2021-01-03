import React from 'react'
import styles from './DemoPage.module.scss'
import Navbar from 'features/navbar/Navbar'
import DemoDataTable from 'components/DemoDataTable/DemoDataTable'

const DemoPage: React.FC = () => (
  <div className={styles.DemoPage} data-testid="DemoPage">
    <Navbar />
    DemoPage Component
  </div>
)

export default DemoPage
