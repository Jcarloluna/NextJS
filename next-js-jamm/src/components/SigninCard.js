import React, { Fragment } from "react";
import styles from "./SigninCard.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { credsModalActions } from "@/store";


const SigninCard = () => {
  const router = useRouter();
  const isLogin = useSelector((state) => state.credsModal.isLogin);
  const dispatch = useDispatch();

  const submitLoginHandler = (event) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  const submitRegistrationHandler = (event) => {
    event.preventDefault();
    console.log('registered!!!');
  };

  const formToggleHandler = () => {
    dispatch(credsModalActions.toggleCredsForm());
  };

  return (
    <Fragment>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <h2>JAMM Authentication</h2>
        </div>
        {isLogin ? (
          <div>
            {/* LOGIN FORM TO PRE PINAGSALITAN LANG YUNG FORM DEPENDE KUNG LOGIN STATE O REGISTRATION 
            STATE PAG DI KAYA MABACKENDAN ULITIN KO NALANG HAHAHA*/}
            <form
              onSubmit={submitLoginHandler}
              className={styles.formContainer}
            >
              <label htmlFor="email" >
                Email
              </label>
              <input type="email" name="email" id="inputEmail" required />
              <label htmlFor="password" >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="inputPassword"
                required
              />
              <button className={styles.primaryButton}>SIGN IN</button>
            </form>
            <div className={styles.signUpButtonContainer}>
              <span>OR</span>
              <button
                className={styles.primaryButton}
                onClick={formToggleHandler}
              >
                SIGN UP
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* ETO YUNG REG FORM*/}
            <form
              onSubmit={submitRegistrationHandler}
              className={styles.formContainer}
            >
              <label htmlFor="email" >
                Email
              </label>
              <input type="email" name="email" id="inputEmail" required />
              <label htmlFor="password" >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="inputPassword"
                required
              />
              <label htmlFor="cpassword">
                Confirm Password
              </label>
              <input
                type="cpassword"
                name="cpassword"
                id="inputPassword"
                required
              />
              <button className={styles.primaryButton}>SIGN UP</button>
            </form>
            <div className={styles.signUpButtonContainer}>
              <span>OR</span>
              <button
                className={styles.primaryButton}
                onClick={formToggleHandler}
              >
                BACK TO SIGN IN
              </button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default SigninCard;
