import React from 'react'
import styles from './MainNavigation.module.css'
import NavigationButtons from './NavigationButtons'

const MainNavigation = () => {
    
  return (
    <div className={styles.container}>
      <h2>JAMM</h2>
      <NavigationButtons/>
    </div>
  )
}

export default MainNavigation
