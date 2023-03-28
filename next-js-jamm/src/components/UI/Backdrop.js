import React from "react";
import { useDispatch } from "react-redux";
import { credsModalActions } from "../../store/index";
import styles from './Backdrop.module.css'

const Backdrop = () => {
  const dispatch = useDispatch();

  const backdropToggle = () => {
    dispatch(credsModalActions.toggleCredsModal());
  };
  return <div onClick={backdropToggle} className={styles.backdrop}></div>;
};

export default Backdrop;
