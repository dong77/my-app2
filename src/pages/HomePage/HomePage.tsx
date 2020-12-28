import React from 'react'
import styles from './HomePage.module.scss'
import Navbar from 'features/navbar/Navbar'
const HomePage: React.FC = () => (
  <div className={styles.HomePage} data-testid="HomePage">
    <Navbar />
    HomePage Component
  </div>
)

export default HomePage
