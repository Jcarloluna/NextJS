import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { credsModalActions } from "@/store";
import styles from "./NavigationButtons.module.css"

const NavigationButtons = () => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(credsModalActions.toggleCredsModal());

  };

  return (
    <Fragment>
      <button className={styles.primaryButton} onClick={toggleHandler}>
        Sign in
      </button>
    </Fragment>
  );
};

export default NavigationButtons;
