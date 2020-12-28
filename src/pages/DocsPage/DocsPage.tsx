import React from 'react'
import styles from './DocsPage.module.scss'
import Navbar from 'features/navbar/Navbar'
const DocsPage: React.FC = () => (
  <div className={styles.DocsPage} data-testid="DocsPage">
    <Navbar />
    DocsPage Component
  </div>
)

export default DocsPage
