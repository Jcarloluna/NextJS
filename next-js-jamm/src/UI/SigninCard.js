import React, { Fragment } from "react";
import styles from "./SigninCard.module.css";
import { useDispatch } from "react-redux";
import { credsModalActions } from "@/store";

const SigninCard = () => {
  
  return (
    <Fragment>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
            <h2>Just Another Minecraft Multiplayer</h2>
        </div>
        <form className={styles.formContainer}>
          <label for="email">Email</label>
          <input type="email" name="email" id="inputEmail"/>
          <label for="email">Password</label>
          <input type="password" name="password" id="inputPassword"/>
          <button>SIGN IN</button>
        </form>
      </div>
    </Fragment>
  );
};

export default SigninCard;
