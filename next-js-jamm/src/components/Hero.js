import React, { Fragment, useState } from 'react'
import SigninCard from './SigninCard'
import styles from './Hero.module.css'

const Hero = () => {
  

  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.title}>Just Another Minecraft Server</h1>
        <SigninCard/>
      </div>
    </Fragment>
  )
}

export default Hero
