import React, { Fragment } from 'react'
import styles from './SigninCard.module.css'

const SigninCard = () => {
  return (
    <Fragment>
      <div className={styles.cardContainer}>
        <form className={styles.formContainer}method="post">
          <label for="email">Email</label>
          <input className='form-control' id="email" type="text" name="Email"/>

          <label for="email">Password</label>
          <input id="email" type="email" name="Email"/>
        
          <button class="button-primary" type="submit" value="Submit"> Sign in</button>
        </form>
      </div>
    </Fragment>
  )
}

export default SigninCard
